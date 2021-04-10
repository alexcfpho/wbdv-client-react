import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import quizzesService from "../../services/quizzes-services";

const QuizzesList = () => {
    const {courseId} = useParams()
    const [quizzes, setQuizzes] = useState([])

    useEffect(() => {
        quizzesService.findAllQuizzes().then((quizzes => {
            setQuizzes(quizzes)
        }))
    }, [courseId])
    return (
        <div>
            <h2>Quizzes ({quizzes.length})</h2>
            <ul>
                {
                    quizzes.map((quiz) => {
                        return (
                            <li>
                                <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                                    {quiz.title}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default QuizzesList;