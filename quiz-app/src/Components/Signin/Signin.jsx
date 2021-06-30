import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, TextField, FormControl, InputAdornment, IconButton, OutlinedInput, InputLabel } from "@material-ui/core"
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { Button } from "@material-ui/core"
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import { useHistory } from "react-router-dom"
import axios from "axios"
import "./Signin.css"
const useStyles = makeStyles((theme) => ({

    title: {
        marginTop: theme.spacing(5),
    },
    btn: {
        marginTop: theme.spacing(5),
        marginLeft: theme.spacing(0),
        marginBottom: theme.spacing(4),
        paddingRight: "1.4rem !important"
    },
    sendIcon: {
        marginRight: theme.spacing(1),
    }

}))
export default function Signin() {
    const history = useHistory()
    const classes = useStyles();
    const [values, setValues] = useState({
        email: '',
        password: '',
        showPassword: false,
    });
    const togglePassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const signinUser = async () => {
        const { email, password } = values
        const token = localStorage.getItem("tkn")
        const { data } = await axios.post("https://quiz-app-6.herokuapp.com/signin", {
            email,
            password
        })
        if (!!data) {
            history.push("/admin")
            localStorage.setItem("tkn", data.tkn)
        }
        await axios.post("https://quiz-app-6.herokuapp.com/addquiz", {}, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
    }
    return (
        <Container>
            <Typography variant="h3" className={classes.title}>Signin</Typography>
            <form className={classes.root} autoComplete="off">
                <TextField id="outlined-basic" onChange={handleChange('email')} type="email" label="Email" variant="outlined" className="d-xl-block d-sm-iflex input-field" />
                <FormControl variant="outlined" className="d-xl-block d-sm-iflex input-field">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        labelWidth={70}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={togglePassword}
                                >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <Button variant="contained" color="primary" onClick={signinUser} className={classes.btn}><ExitToAppRoundedIcon className={classes.sendIcon} />Signin</Button>
            </form>
        </Container>
    )
}
