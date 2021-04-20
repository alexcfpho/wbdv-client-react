import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import Question from "./questions/question";
import questionService from "../../services/questions-service"
import quizService from "../../services/quizzes-service"
import {Button, Modal} from "react-bootstrap";

const Quiz = () => {

    const {quizId} = useParams()
    const [questions, setQuestions] = useState([])
    const [quiz, setQuiz] = useState({})
    const [isGraded, setGradedState] = useState(false)
    const [isModal, setModalCall] = useState(false)
    const [score, setScore] = useState(0)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        questionService.findQuestionsForQuiz(quizId).then((questions) => {
            setQuestions(questions)
        })
        quizService.findQuizById(quizId).then((quiz) => {
            setQuiz(quiz)
        })
    }, [quizId])


    useEffect(() => {
        const fetchScore = async () => {
            const response = await quizService.submitQuiz(quizId, questions)
            setScore(response.score);
        };

        if (isModal) {
            fetchScore(quizId, questions)
        }

    }, [isModal, questions])

    return (
        <div>
            <h3>{quiz.title}</h3>
            <div className={"list-group"}>
                {
                    questions.map((question) =>
                        <div className={"list-group-item"} key={question._id}>
                            <Question
                                questions={questions}
                                question={question}
                                setGradedState={setGradedState}
                                isGraded={isGraded}
                                setQuestions={setQuestions}
                            />
                        </div>
                    )
                }
            </div>
            <>
                {
                    isModal &&
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Attempt Score</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>You score: {score}</Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={() => {
                                handleClose()
                                setModalCall(false)
                            }
                            }>
                                Close
                            </Button>
                            <Button variant={"secondary"} onClick={() => {
                                handleClose()
                                setModalCall(false)
                                setGradedState(false)
                                setScore(0)
                            }
                            }>
                                Reset Quiz
                            </Button>
                        </Modal.Footer>
                    </Modal>

                }
            </>
            <Button variant={"success"} size={"lg"} className={"mt-4"} onClick={() => {
                setGradedState(true)
                setModalCall(true)
                handleShow()
            }}>
                Submit Answers
            </Button>
        </div>
    )
}

export default Quiz;