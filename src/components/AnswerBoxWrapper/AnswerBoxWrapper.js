import { Button, Grid, Input } from "@mui/material";

import "./AnswerBoxWrapper.css"

function AnswerBoxWrapper({ answer, onAnswerChange, onSubmit }) {
    return (
        <Grid container className="AnswerBoxWrapper">
            <Grid item xs={12}>
                <Input
                    autoFocus={true}
                    value={answer}
                    onChange={(e) => { onAnswerChange(e.target.value) }}
                />
                <Button onClick={() => { onSubmit() }}>
                    Submit
                </Button>
            </Grid>
        </Grid>
    )
}

export default AnswerBoxWrapper;