import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Signin from "./Components/Signin/Signin";
import LandingPage from "./Components/Landing Page/Landing Page";
import Quiz from "./Components/Quiz/Quiz";
import Admin from "./Components/Admin/Admin";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import blue from "@material-ui/core/colors/blue";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
  },
});
function App() {
  const isLoggedIn = localStorage.getItem("tkn");
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/signin">
              {!!isLoggedIn ? <Redirect to="/admin" /> : <Signin />}
            </Route>
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/admin/quiz">
              {!!isLoggedIn ? <Quiz /> : <Redirect to="/signin" />}
            </Route>
            <Route exact path="/">
              {!!isLoggedIn ? <Redirect to="/admin" /> : <LandingPage />}
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
