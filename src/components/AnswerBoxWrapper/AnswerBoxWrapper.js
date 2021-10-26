import { Grid, Input } from "@mui/material";

import "./AnswerBoxWrapper.css"

function AnswerBoxWrapper({ answer }) {
    return (
        <Grid container className="AnswerBoxWrapper">
            <Grid item xs={12}>
                <Input value={answer} />
            </Grid>
        </Grid>
    )
}

export default AnswerBoxWrapper;