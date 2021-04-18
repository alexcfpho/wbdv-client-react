import React, {useState} from "react";
import {ListGroup, ListGroupItem} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const TrueFalseQuestion = ({question, isGraded, setGradedState, setChoice}) => {

    const [yourAnswer, setAnswer] = useState("")

    return (
        <div>
            <h5>
                {question.question}
                {
                    question.correct === yourAnswer && isGraded &&
                    <FontAwesomeIcon icon={"check"} className={"ml-4"}/>
                }
                {
                    question.correct !== yourAnswer && isGraded &&
                    <FontAwesomeIcon icon={"times"} className={"ml-4"}/>
                }
            </h5>
            <ListGroup>
                <ListGroupItem key={"001"} variant={`${isGraded && 'true' === question.correct ? "success"
                    : isGraded && yourAnswer !== question.correct && yourAnswer === 'true' ? "danger" : ""}`}>
                    <label>
                        <input
                            type="radio"
                            value={"true"}
                            name={question._id}
                            onChange={(e) => {
                                setGradedState(false)
                                setAnswer(e.target.value)
                                setChoice(prevState => ({
                                    ...prevState,
                                    answer: e.target.value
                                }))
                            }}
                        />
                        True
                    </label>
                    {
                        isGraded && 'true' === question.correct &&
                        <FontAwesomeIcon icon={"check"} className={"ml-2"}/>
                    }
                    {
                        isGraded && yourAnswer !== question.correct && yourAnswer === 'true' &&
                        <FontAwesomeIcon icon={"times"} className={"ml-2"}/>
                    }
                </ListGroupItem>
                <ListGroupItem key={"002"}
                               variant={`${isGraded && 'false' === question.correct ? "success"
                                   : isGraded && yourAnswer !== question.correct && yourAnswer === 'false' ? "danger" : ""}`}>
                    <label>
                        <input type="radio"
                               value={"false"}
                               name={question._id}
                               onChange={(e) => {
                                   setGradedState(false)
                                   setAnswer(e.target.value)
                                   setChoice(prevState => ({
                                       ...prevState,
                                       answer: e.target.value
                                   }))
                               }}
                        />
                        False
                    </label>
                    {
                        isGraded && 'false' === question.correct &&
                        <FontAwesomeIcon icon={"check"} className={"ml-2"}/>
                    }
                    {
                        isGraded && yourAnswer !== question.correct && yourAnswer === 'false' &&
                        <FontAwesomeIcon icon={"times"} className={"ml-2"}/>
                    }
                </ListGroupItem>
            </ListGroup>
            <div className={"mt-4"}>
                <h5>You Answered:</h5> <p>{yourAnswer}</p>
            </div>
        </div>
    )
}

export default TrueFalseQuestion