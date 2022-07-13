import React from "react";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';


export default function DatePickerMe(props){
    

    const {name, label, value, onChange }=props;

    const convertToDefEventParam =(name, value) => ({
        target: {
            name, value
        }
    })
    
    return(
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker variant='inline' inputVariant='outlined'
        KeyboardButtonProps={{
            'aria-label': 'Modifier date',
        }} 
        label={label}
        format='dd/MM/yyyy'
        name={name}
        value={value}
        onChange={date => onChange(convertToDefEventParam(name, date))} />
        </MuiPickersUtilsProvider>
        
    )
    
}