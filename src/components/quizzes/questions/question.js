import React, {useEffect, useState} from "react";
import TrueFalseQuestion from "./true-false-question";
import MultipleChoiceQuestion from "./multiple-choice-question";

const Question = ({question, isGraded, setGradedState, setQuestions, questions}) => {

    const [yourChoice, setChoice] = useState(question)

    // const isInitialMount = useRef(true);

    useEffect(() => {
        // isInitialMount.current ? isInitialMount.current = false
        //     : alert("questionAns: " + JSON.stringify(yourChoice))

        setQuestions(questions.map(question =>
            question._id === yourChoice._id ? yourChoice : question
        ))
    }, [yourChoice])

    return (
        <div>
            {
                question.type === "TRUE_FALSE" &&
                <TrueFalseQuestion
                    question={question}
                    setChoice={setChoice}
                    isGraded={isGraded}
                    setGradedState={setGradedState}/>
            }
            {
                question.type === "MULTIPLE_CHOICE" &&
                <MultipleChoiceQuestion
                    question={question}
                    setChoice={setChoice}
                    isGraded={isGraded}
                    setGradedState={setGradedState}/>
            }
        </div>
    )
}

export default Question