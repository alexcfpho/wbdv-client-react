import React, {useState} from "react";
import {Button, ListGroup, ListGroupItem} from "react-bootstrap";

const TrueFalseQuestion = ({question}) => {

    const [yourAnswer, setAnswer] = useState("")
    const [isGraded, setGradedState] = useState(false)

    return (
        <div>
            <h5>{question.question}</h5>
            <ListGroup>
                <ListGroupItem key={"001"} variant={`${isGraded && 'true' === question.correct ? "success"
                    : isGraded && yourAnswer !== question.correct && yourAnswer === 'true' ? "danger" : ""}`}>
                    <label>
                        <input
                            type="radio"
                            name={question._id}
                            onClick={() => {
                                setAnswer("true")
                                setGradedState(false)
                            }}
                        />
                        True
                    </label>
                </ListGroupItem>
                <ListGroupItem key={"002"}
                               variant={`${isGraded && 'false' === question.correct ? "success"
                                   : isGraded && yourAnswer !== question.correct && yourAnswer === 'false' ? "danger" : ""}`}>
                    <label>
                        <input type="radio"
                               name={question._id}
                               onClick={() => {
                                   setAnswer("false")
                                   setGradedState(false)
                               }}/>
                        False
                    </label>
                </ListGroupItem>
            </ListGroup>
            <div className={"mt-4"}>
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

export default TrueFalseQuestion