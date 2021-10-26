import { Grid } from "@mui/material";

import { AnswerBoxContainer, FormulaContainer } from "./containers"

function App() {
  return (
    <Grid container className="Body">
      <Grid item xs={12}>
        <FormulaContainer />
      </Grid>
      <Grid item xs={12}>
        <AnswerBoxContainer />
      </Grid>
    </Grid>
  );
}

export default App;
