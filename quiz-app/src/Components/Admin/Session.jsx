import React from "react";
import { Button } from "@material-ui/core"
import { Link } from "react-router-dom"

export default function Session({ item, classes }) {
  return (
    <Link to="/admin/quiz" color="inherit" className="login-link">
      <Button variant="contained" color="white" className={classes.btn}>
        {item.sessionNo}
      </Button>
    </Link>
  )
}
