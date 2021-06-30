import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from "@material-ui/core"
import { Button } from "@material-ui/core"
import { AddRounded } from '@material-ui/icons';
import { Link } from "react-router-dom"
import axios from "axios"
import Session from "./Session"
import "./Admin.css"
const useStyles = makeStyles((theme) => ({
    title: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(5),
    },
    btn: {
        width: "150px",
        height: "150px",
        backgroundColor: "#fff",
        margin: theme.spacing(2)
    }
}));
export default function Admin() {
    const classes = useStyles()
    const [sessions, setSessions] = useState([])
    useEffect(() => {
        fetchSessions()
    }, [])

    const fetchSessions = async () => {
        const token = localStorage.getItem("tkn")
        const { data } = await axios.post("https://quiz-app-6.herokuapp.com/getsession", {}, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        setSessions(data)
    }
    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
        >
            <Typography variant="h3" className={classes.title}>Create Your Quiz</Typography>
            <Grid direction="row" container justify="center" alignItems="flex-start">
                <Link to="/admin/quiz" color="inherit" className="login-link">
                    <Button variant="contained" className={classes.btn}>
                        <AddRounded />
                    </Button>
                </Link>
                {
                    console.log(sessions.sessions) && sessions.length > 0 &&
                    sessions.sessions.map((item, idx) => {
                        return <Session item={item} classes={classes} />
                    })

                }
            </Grid>
        </Grid>
    )
}
