import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, InputAdornment, IconButton, FormControl, OutlinedInput, InputLabel, TextField } from "@material-ui/core"
import { Button } from "@material-ui/core"
import { Visibility, VisibilityOff } from '@material-ui/icons';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import { useHistory } from "react-router-dom"
import axios from "axios"
import "./Signup.css"

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            flexGrow: 1,
            width: '25ch',
        },
    },
    title: {
        marginTop: theme.spacing(5),
    },
    btn: {
        marginTop: theme.spacing(5),
        marginLeft: theme.spacing(0),
        marginBottom: theme.spacing(4),

    },
    sendIcon: {
        marginLeft: theme.spacing(4),
    }
}));
export default function Signup() {
    const classes = useStyles();
    const history = useHistory()
    const [values, setValues] = useState({
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        showPassword: false,
        showCPassword: false,
    });
    const togglePassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
    const toggleCPassword = () => {
        setValues({ ...values, showCPassword: !values.showCPassword });
    };
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const signupUser = async () => {
        try {
            const { email, username, password, confirmPassword } = values
            const { data } = await axios.post("https://quiz-app-6.herokuapp.com/signup", {
                email,
                username,
                password,
                cpassword: confirmPassword
            })
            console.log(data)
            if (!!data) {
                history.push("/signin")
            }
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <Container>
            <Typography variant="h3" className={classes.title}>Signup</Typography>
            <form className={classes.root} autoComplete="off">
                <TextField id="outlined-basic" onChange={handleChange('email')} type="email" label="Email" variant="outlined" className="d-xl-block d-sm-iflex input-field" />
                <TextField id="outlined-basic" onChange={handleChange('username')} type="text" label="Username" variant="outlined" className="d-xl-block d-sm-iflex input-field" />
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
                <FormControl variant="outlined" className="d-xl-block d-sm-iflex input-field">
                    <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showCPassword ? 'text' : 'password'}
                        value={values.confirmPassword}
                        onChange={handleChange('confirmPassword')}
                        labelWidth={135}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={toggleCPassword}
                                >
                                    {values.showCPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <Button variant="contained" color="primary" onClick={signupUser} className={classes.btn}>Submit<SendRoundedIcon className={classes.sendIcon} /></Button>
            </form>
        </Container>
    )
}
