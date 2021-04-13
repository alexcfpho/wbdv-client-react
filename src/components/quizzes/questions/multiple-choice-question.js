import React, {useState} from "react";
import ListGroup from 'react-bootstrap/ListGroup'
import {Button, ListGroupItem} from "react-bootstrap";

const MultipleChoiceQuestion = ({question, activeItem}) => {
    const [yourAnswer, setAnswer] = useState("")
    const [isGraded, setGradedState] = useState(false)


    return (
        <div>
            <h5>
                {question.question}
                {
                    question.correct === yourAnswer && isGraded &&
                    <i className="fas fa-check"></i>
                }
                {
                    question.correct !== yourAnswer && isGraded &&
                    <i className="fas fa-times"></i>
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
                                        }}
                                        type="radio"
                                        name={question._id}/>
                                    {choice}
                                </label>
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