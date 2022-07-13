import { Button, makeStyles } from "@material-ui/core";
import React from "react";

export default function ButtonMe(props) {


    const useStyles = makeStyles(theme=> ({
        root:{
            margin: theme.spacing(3)
        },
         label:{
            textTransform: 'none'
         },
        

    }))


    const {text, size, color, variant, onClick, ...other } = props;
    const classes = useStyles();

    return (

        <Button
        variant={variant || 'contained'}
        size={size || 'large'} 
        color={color || 'primary'}
        onClick={onClick}
        {...other}
        classes={{root:classes.root, label:classes.label}}
        >
            {text}

        </Button>
    )
}