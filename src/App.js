import React from "react";
import "./App.css";
import GroupeRock from "./components/pages/GroupeRock";
import NavBar from "./components/header/NavBar";

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  container: {
    paddingTop:'5%',
  },
}));

function App() {
  const classes = useStyles();
  let nom = "Hello Madagascar";

  return (
    <div className="App">
        <NavBar/>
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="xl">
            <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: 'auto' }}>
              <GroupeRock/>
            </Typography>
          </Container>
        </React.Fragment>
    </div>
  );
}

export default App;
