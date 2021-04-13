import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import Question from "./questions/question";
import questionService from "../../services/questions-service"
import quizService from "../../services/quizzes-service"

const Quiz = () => {

    const {quizId} = useParams()
    const [questions, setQuestions] = useState([])
    const [quiz, setQuiz] = useState({})

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
                            <Question question={question}/>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Quiz;