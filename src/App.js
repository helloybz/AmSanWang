
import { useState } from "react";
import { Grid } from "@mui/material";

import { AnswerBoxWrapper, FormulaWrapper } from "./components";

import { generateRandomFormula } from "./generator";
import { validateAnswer } from "./validator";


function App() {
  const [formula, setFormula] = useState(generateRandomFormula())
  const [answer, setAnswer] = useState("")

  const onAnswerChange = (value) => {
    if (!isNaN(value[value.length - 1])) {
      setAnswer(value.trim())
    } else if (value === "-") {
      setAnswer(value.trim())
    }
    else {
      setAnswer(value.slice(0, value.length - 1).trim())
    }
  }

  const onSubmit = () => {
    if (validateAnswer(formula, answer)) {
      setFormula(generateRandomFormula())
      setAnswer("")
    } else {
      setAnswer("")
    }
  }

  return (
    <Grid container className="Body">
      <Grid item xs={12}>
        <FormulaWrapper
          formula={formula}
        />
      </Grid>
      <Grid item xs={12}>
        <AnswerBoxWrapper
          answer={answer}
          onAnswerChange={onAnswerChange}
          onSubmit={onSubmit}
        />
      </Grid>
    </Grid>
  );
}

export default App;
