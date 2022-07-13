import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {  createTheme, CssBaseline, makeStyles, ThemeProvider } from "@material-ui/core";
import SideMenu from "../components/SideMenu";
import Formtrainee from "../components/TraineeDetails";
import Convention from "../pages/convention";
import Home from "../pages/home";
import Notfound from "../pages/notfound";
import Trainee from "../pages/trainee/Trainee";
import Header from "../components/Header";
import TraineeForm from "../pages/trainee/TraineeForm";



const theme = createTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c44b126",
    },
    secondary: {
      main: "#f83245",
      light: "f8324526",
    },
    background: {
      default: "#f4f5fd",
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: "translateZ(0)",
      },
    },
  },
  props: {
    //dont works on button off
    MuiIconButton: {
      disableRipple: true,
    },
  },
});

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "84,5%",
  },
});

const App = () => {
  const classes = useStyles();

  return (
    /*All app is here*/

    <ThemeProvider theme={theme}>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
        <Trainee/>
        </div>
      <CssBaseline />
    </ThemeProvider>

    // <BrowserRouter>
    //   <Routes>
    //     {/*Creating routes to the pages*/}
    //     <Route path="/" element={<Home />} />
    //     <Route path="/trainee" element={<Trainee />} />
    //     <Route path="/convention" element={<Convention />} />
    //     <Route path="*" element={<Notfound />} />
    //     <Route path="/traineedetails/:id" element={<Formtrainee/>} />
    //   </Routes>
    // </BrowserRouter>
  );
};

export default App;
