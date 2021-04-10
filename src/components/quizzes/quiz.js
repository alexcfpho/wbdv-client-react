import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import Question from "./questions/question";
import questionService from "../../services/questions-service"

const Quiz = () => {

    const {quizId} = useParams()
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        questionService.findQuestionsForQuiz(quizId).then((questions) => {
            setQuestions(questions)
        })
    }, [quizId])

    return (
        <div>
            <h3>Quiz {quizId} ({questions.length})</h3>
            <ul>
                {
                    questions.map((question) => {
                        return (
                            <li>
                                <Question question={question}/>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Quiz;