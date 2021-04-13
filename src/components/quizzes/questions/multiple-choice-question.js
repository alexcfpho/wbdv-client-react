import React, {useState} from "react";
import ListGroup from 'react-bootstrap/ListGroup'
import {Button, ListGroupItem} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const MultipleChoiceQuestion = ({question}) => {
    const [yourAnswer, setAnswer] = useState("")
    const [isGraded, setGradedState] = useState(false)


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
                {
                    question.choices.map((choice, index) => {
                        return (
                            <ListGroupItem key={index} variant={`${isGraded && choice === question.correct ? "success"
                                : isGraded && yourAnswer !== question.correct && yourAnswer === choice ? "danger" : ""}`}>
                                <label>
                                    <input
                                        onClick={() => {
                                            setAnswer(choice)
                                            setGradedState(false)
                                        }}
                                        type="radio"
                                        name={question._id}/>
                                    {choice}
                                </label>
                                {
                                    isGraded && choice === question.correct &&
                                    <FontAwesomeIcon icon={"check"} className={"ml-2"}/>
                                }
                                {
                                    isGraded && yourAnswer !== question.correct && yourAnswer === choice &&
                                    <FontAwesomeIcon icon={"times"} className={"ml-2"}/>
                                }
                            </ListGroupItem>
                        )
                    })
                }
            </ListGroup>
            <div className="mt-4">
                <h5>You Answered:</h5> <p>{yourAnswer}</p>
            </div>
            <Button variant={"success"} size={"lg"} onClick={() => {
                setGradedState(true)
            }}>
                Grade
            </Button>
        </div>
    )
}

export default MultipleChoiceQuestion