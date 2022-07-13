import { makeStyles, withStyles } from '@material-ui/core';
import React from 'react';
import '../App/App.css'



const style = {
        sideMenu: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '320px',
        height: '100%',
        backgroundColor: '#2e8b57',
         
    }
}


const SideMenu = (props) => {
        
    // const classes = useStyles();
    const {classes} = props;

    return (
        <div className={classes.sideMenu}>
            
        </div>
    );
};

export default withStyles(style) (SideMenu) ;