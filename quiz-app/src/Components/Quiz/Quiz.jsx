import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, TextField, Button } from "@material-ui/core"
import { v4 as uuidv4 } from "uuid"
import QuizQuestion from './quizQuestion';
import { AddRounded, SendRounded } from '@material-ui/icons';
import axios from "axios"
const useStyles = makeStyles((theme) => ({

    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    cardTitle: {
        fontSize: 14,
    },
    title: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(5),
    },
    btn: {
        margin: theme.spacing(3),
    },
    form: {
        width: "100%",
        [theme.breakpoints.up('md')]: {
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
        },
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
    btnAddIcon: {
        marginRight: theme.spacing(1)
    },
    btnSendIcon: {
        marginLeft: theme.spacing(1)
    }
}));
export default function Quiz() {
    const classes = useStyles()
    const [title, setTitle] = React.useState("")
    const [value, setValue] = React.useState('a');
    const [questionsList, setQuestions] = React.useState([
        {
            id: uuidv4(),
            question: "",

            option1: "Enter Option 1",
            option2: "Enter Option 2",
            option3: "Enter Option 3",
            option4: "Enter Option 4",

            ansKey: ""

        }
    ]);
    const handleRadioChange = (event) => {
        setValue(event.target.value);
    };

    const addQuestion = () => {
        setQuestions([...questionsList, {
            id: uuidv4(),
            question: "",

            option1: "",
            option2: "",
            option3: "",
            option4: "",

            ansKey: ""

        }])
    }
    const handleField = (id, event) => {
        const newQuestionsList = questionsList.map(list => {
            if (id === list.id) {
                list[event.target.name] = event.target.value
            }
            return list
        })
        setQuestions(newQuestionsList)
        console.log(questionsList)
    }
    const submitQuestions = async (e) => {
        e.preventDefault()
        const token = localStorage.getItem("tkn")
        const quesArr = questionsList.map((ques, idx) => {
            return {
                question: ques.question,
                ansKey: ques.ansKey,
                options: [ques.option1, ques.option2, ques.option3, ques.option4]
            }
        })
        const quizSession = [
            {
                sessionNo: 1,
                sessionTitle: title,
                questions: quesArr
            }
        ]

        const { data } = await axios.post("https://quiz-app-6.herokuapp.com/addsession", { sessions: quizSession }, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        console.log(data)
    }
    return (
        <Container>
            <Typography variant="h3" className={classes.title}>Add Quiz Data</Typography>
            <form class={classes.form}>
                <TextField disabled
                    id="filled-disabled"
                    defaultValue="0"
                    label="Session No"
                    variant="filled" className={classes.input} />
                <TextField id="outlined-basic" required onChange={(e) => setTitle(e.target.value)} value={title} placeholder="Session Title" variant="outlined" className={classes.input} />
                {
                    questionsList.map((val, idx) => (
                        <QuizQuestion val={val} idx={idx} value={value} handleRadioChange={handleRadioChange} handleField={handleField} />
                    ))
                }
                <Button variant="outlined" color="primary" className={classes.btn} onClick={addQuestion}>
                    <AddRounded className={classes.btnAddIcon} />  Add New Question
                </Button>
                <Button variant="contained" onClick={submitQuestions} color="primary" className={classes.btn}>
                    Submit <SendRounded className={classes.btnSendIcon} />
                </Button>

            </form>
        </Container >
    )
}
