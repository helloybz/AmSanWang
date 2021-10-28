import { Grid } from "@mui/material";

import "./FormulaWrapper.css"

function FormulaWrapper({ formula }) {

    var expression = ""
    if (formula === "") {
        expression = <div>Spinner</div>
    } else {
        expression = formula
    }
    return (
        <Grid container className="FormulaWrapper">
            <Grid item xs={12}>
                {expression}
            </Grid>
        </Grid>
    )
}

export default FormulaWrapper;