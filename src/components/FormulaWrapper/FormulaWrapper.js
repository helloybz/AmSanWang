import { Grid } from "@mui/material";

import "./FormulaWrapper.css"

function FormulaWrapper({ formula }) {
    return (
        <Grid container className="FormulaWrapper">
            <Grid item xs={12}>
                {formula}
            </Grid>
        </Grid>
    )
}

export default FormulaWrapper;