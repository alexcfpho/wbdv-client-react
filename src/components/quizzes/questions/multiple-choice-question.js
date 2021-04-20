import React, {createRef, useState} from "react";
import ListGroup from 'react-bootstrap/ListGroup'
import {Button, ListGroupItem} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const MultipleChoiceQuestion = ({question, isGraded, setGradedState, setChoice}) => {

    const [yourAnswer, setAnswer] = useState("")

    const choicesRefs = []
    const uncheckRefs = () => {
        choicesRefs.forEach(ref => ref.current.checked = false)
    }

    const createUniqueRef = () => {
        const newRef = createRef()
        choicesRefs.push(newRef)
        return newRef;
    }

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
                        const newRef = createUniqueRef();
                        return (
                            <ListGroupItem key={index} variant={`${isGraded && choice === question.correct ? "success"
                                : isGraded && yourAnswer !== question.correct && yourAnswer === choice ? "danger" : ""}`}>
                                <label>
                                    <input
                                        ref={newRef}
                                        value={choice}
                                        type="radio"
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
            <Button onClick={
                uncheckRefs
            }>
                Clear
            </Button>
        </div>
    )
}

export default MultipleChoiceQuestion