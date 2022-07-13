import { Checkbox, FormControl, FormControlLabel, TextField } from "@material-ui/core";
import React from "react";

export default function CheckBoxMe(props) {
  const { name, label, value, onChange } = props;

  const convertToDefEventParam = (name, value) => ({
    target: {
        name, value
    }
  })

  return (
    <FormControl>
        <FormControlLabel control= {<Checkbox  
        name={name}
        color='primary'
        checked={value}
        onChange={e => onChange(convertToDefEventParam(name, e.target.checked))}
        />}
        label={label}

        />

        
    </FormControl>
    
  );
}
