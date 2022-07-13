import { makeStyles, Paper } from "@material-ui/core";
import { PeopleOutlined } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import TraineeForm from "./TraineeForm";
// import Navigation from "../../components/Navigation";
// import Tabletrainee from "../../components/Tabletrainee";




  const useStyles = makeStyles(theme =>({
    pageContent: {
          margin: theme.spacing(5),
          padding: theme.spacing(3)
      },

    }
    
  ))


const Trainee = () => {

  
  
    const classes = useStyles();
    return (
      

      <>
      <PageHeader
          title="Nouveau Stagiaire" subTitle="Creation d'un nouveau stagiaire" icon={<PeopleOutlined fontSize="large" />} />
          <Paper className={classes.pageContent}>
            <TraineeForm/>
          </Paper>
      </>
    

    // <div>
    //     <Navigation/>
    //     <h1>Trainee</h1>
    // <Tabletrainee/>

    // </div>
  )
}

export default Trainee;
