import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import quizzesService from "../../services/quizzes-services";
import {Button} from "react-bootstrap";


const QuizzesList = () => {
    const {courseId} = useParams()
    const [quizzes, setQuizzes] = useState([])

    useEffect(() => {
        quizzesService.findAllQuizzes()
            .then(results => setQuizzes(results))
    }, [])
    return (
        <div>
            <h2>Quizzes ({quizzes.length})</h2>
            <div className={"list-group"}>
                {
                    quizzes.map((quiz) =>
                        <div className={"list-group-item"} key={quiz._id}>
                            <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                                <div className={"float-left"}> {quiz.title}</div>
                                <Button size={"lg"} variant={"primary"} className={"float-right"}>
                                    Start Quiz
                                </Button>
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default QuizzesList;