import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBarBottom from "./components/organism/navbar-bottom";
import { makeStyles, Container } from "@material-ui/core";
import MaterialUISample from "./components/template/material-ui-sample";
import NavBarTopSearch from "./components/organism/navbar-top-search";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    height: "700px",
    paddingTop: 60,
  },
});

function App() {
  const classContainer = `${useStyles().root} App`;
  return (
    <div className={classContainer}>
      <NavBarTopSearch />
      <Container maxWidth="sm" className={useStyles().container}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MaterialUISample />
      </Container>
      <NavBarBottom />
    </div>
  );
}

export default App;
