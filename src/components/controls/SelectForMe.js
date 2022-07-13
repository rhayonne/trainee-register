import { FormControl, InputLabel, MenuItem, Select,  } from '@material-ui/core';
import React from 'react';


export default function SelectForMe(props){


    const {name, label, value, onChange, options} = props;

    return(
        <FormControl variant='outlined'>
            <InputLabel>{label}</InputLabel>
            <Select>
            label={label}
            name={name}
            value={value}
            onChange={onChange}>
                <MenuItem value="">Selectioner</MenuItem>
                {
                    options.map(
                        item => (<MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>)
                    )
                }
            </Select> 
        </FormControl>
    )
}