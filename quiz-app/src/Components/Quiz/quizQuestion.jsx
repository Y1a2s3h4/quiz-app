import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, TextField, Grid, Radio, CardActions } from "@material-ui/core"
const useStyles = makeStyles((theme) => ({

    cardTitle: {
        fontSize: 14,
    },
    input: {
        width: "100%",
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    card: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3)
    },

}));
export default function QuizQuestion({ val, idx, value, handleRadioChange, handleField }) {
    const classes = useStyles()

    return (
        <Card className={classes.card} key={val.id}>
            <CardContent>
                <Typography className={classes.cardTitle} color="textSecondary" gutterBottom>
                    Question No {idx + 1}
                </Typography>

                <TextField id="outlined-basic" required value={val.question} onChange={event => handleField(val.id, event)} name="question" placeholder="Enter Your Question" variant="outlined" className={classes.input} />
                <Grid container spacing={2} >
                    <Grid container direction="row"
                        justify="space-around"
                        alignItems="center">
                        <div>
                            <Radio checked={value === val.option1} onChange={handleRadioChange} value={val.option1} />
                            <TextField id="standard-basic" required onChange={event => handleField(val.id, event)} name="option1" value={val.option1} />
                        </div>
                        <div>
                            <Radio checked={value === val.option2} onChange={handleRadioChange} value={val.option2} />
                            <TextField id="standard-basic" required onChange={event => handleField(val.id, event)} name="option2" value={val.option2} />
                        </div>
                    </Grid>
                    <Grid container direction="row"
                        justify="space-around"
                        alignItems="center">
                        <div>
                            <Radio checked={value === val.option3} onChange={handleRadioChange} value={val.option3} />
                            <TextField id="standard-basic" required onChange={event => handleField(val.id, event)} name="option3" value={val.option3} />
                        </div>
                        <div>
                            <Radio checked={value === val.option4} onChange={handleRadioChange} value={val.option4} />
                            <TextField id="standard-basic" required onChange={event => handleField(val.id, event)} name="option4" value={val.option4} />
                        </div>
                    </Grid>


                </Grid>
            </CardContent>
            <CardActions>
                <TextField id="outlined-basic" onChange={e => handleField(val.id, e)} value={val.ansKey} name="ansKey" label="Answer" placeholder="Enter Answer Value" variant="outlined" className={classes.input} />
            </CardActions>
        </Card>
    )
}
