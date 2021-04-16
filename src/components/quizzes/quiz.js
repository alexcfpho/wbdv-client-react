import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import Question from "./questions/question";
import questionService from "../../services/questions-service"
import quizService from "../../services/quizzes-service"
import {Button} from "react-bootstrap";

const Quiz = () => {

    const {quizId} = useParams()
    const [questions, setQuestions] = useState([])
    const [quiz, setQuiz] = useState({})
    const [isGraded, setGradedState] = useState(false)

    useEffect(() => {
        questionService.findQuestionsForQuiz(quizId).then((questions) => {
            setQuestions(questions)
        })
        quizService.findQuizById(quizId).then((quiz) => {
            setQuiz(quiz)
        })
    }, [quizId])
    return (
        <div>
            <h3>{quiz.title}</h3>
            <div className={"list-group"}>
                {
                    questions.map((question) =>
                        <div className={"list-group-item"} key={question._id}>
                            <Question
                                question={question}
                                setGradedState={setGradedState}
                                isGraded={isGraded}
                            />
                        </div>
                    )
                }
            </div>
            <Button variant={"success"} size={"lg"} className={"mt-4"} onClick={() => {
                setGradedState(true)
                quizService.submitQuiz(quizId, questions)
                    .then(attempts => console.log("attempts: " + attempts))
            }}>
                Submit Answers
            </Button>
        </div>
    )
}

export default Quiz;