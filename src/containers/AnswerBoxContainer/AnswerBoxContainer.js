import { useState } from "react";
import { AnswerBoxWrapper } from "../../components";

function AnswerBoxContainer() {
    const [answer, setAnswer] = useState("")

    return (
        <AnswerBoxWrapper
            answer={answer}
        >
        </AnswerBoxWrapper>
    );
}

export default AnswerBoxContainer;