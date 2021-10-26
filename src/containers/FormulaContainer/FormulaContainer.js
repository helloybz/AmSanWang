import { useState } from "react";
import { FormulaWrapper } from "../../components";

function FormulaContainer() {
    const [formula, setFormula] = useState("2+3")

    return (
        <FormulaWrapper
            formula={formula}
        >
        </FormulaWrapper>
    );
}

export default FormulaContainer;