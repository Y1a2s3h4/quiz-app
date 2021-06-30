import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core"
import { Link } from "react-router-dom"
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import "./Navbar.css"
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    loginIcon: {
        marginRight: theme.spacing(2),
        color: "#fff"
    },
    title: {
        flexGrow: 1,
    },
    loginLink: {
        textDecoration: "none",
        color: "#fff",
    }
}));
export default function Navbar() {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    <Link to="/" className={classes.loginLink}>
                        Quiz App
                    </Link>
                </Typography>
                <Link to="/signin">
                    <Button className={classes.loginLink}>
                        <ExitToAppRoundedIcon className={classes.loginIcon} />
                        Login
                    </Button>
                </Link>

            </Toolbar>
        </AppBar>
    )
}
