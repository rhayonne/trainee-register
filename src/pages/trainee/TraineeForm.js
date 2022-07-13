import {FormControl, FormLabel, Grid, makeStyles, MenuItem, Select, TextField,} from "@material-ui/core";
import React, { useState } from "react";
import CheckBoxMe from "../../components/controls/CheckBoxMe";
import { Controls } from "../../components/controls/Controls";
// import Input from "../../components/controls/Input";
import { useForm, Form } from "../../components/useForm";



const initialFValues = {
  id: 0,
  first_name: "",
  last_name: "",
  num_soci: "",
  birthdate: new Date(),
  addresse1: "",
  addresse2: "",
  city: "",
  country: "",
  zip_code: "",
  active: true,
  active2: true,
}



  export default function TraineeForm() {

    const validate = () => {
    
      let temp ={}
      temp.first_name = values.first_name?"": `Champ obligatoire` 
      temp.last_name = values.last_name?"": `Champ obligatoire` 
      temp.num_soci = values.num_soci.length>14?"": `Min. 15 chiffres`
      setErrors({
        ...temp
      })

      return Object.values(temp).every(x=> x === "")
      
    }
         

  const { values, setValues, erros, setErrors, handleInputChanges, resetForm } = useForm(initialFValues); /* Linked with useForm*/
  

    const handleSubmit = e => {
      e.preventDefault()
       if (validate())
      window.alert('Alert...!')
    }

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            name="first_name"
            label="Prénom"
            value={values.first_name}
            onChange={handleInputChanges}
            error={erros.first_name}
          />
          <Controls.Input
            variant="outlined"
            name="last_name"
            label="Nom"
            value={values.last_name}
            onChange={handleInputChanges}
            error={erros.last_name}
          />
           <Controls.DatePickerMe
            variant="outlined"
            name="birthdate"
            label="Date naissance"
            value={values.birthdate}
            onChange={handleInputChanges}
          />
          <Controls.Input
            variant="outlined"
            name="num_soci"
            label="N. Sec. Sociale"
            value={values.num_soci}
            onChange={handleInputChanges}
            error={erros.num_soci}
          />
            <Controls.Input
            variant="outlined"
            name="addresse1"
            label="Adresse 1"
            value={values.addresse1}
            onChange={handleInputChanges}
          />
          <Controls.Input
            variant="outlined"
            name="addresse2"
            label="Adresse 2"
            value={values.addresse2}
            onChange={handleInputChanges}
          />
        </Grid>
        <Grid item xs={6}>
        <Controls.Input
            variant="outlined"
            name="zip_code"
            label="Code Postale"
            value={values.zip_code}
            onChange={handleInputChanges}
          />
          <Controls.Input
            variant="outlined"
            name="city"
            label="Ville"
            value={values.city}
            onChange={handleInputChanges}
          />
          <Controls.Input 
            variant='outlined'
            name='country'
            label='Pays'
            value={values.country}
            onChange={handleInputChanges}
            
            />
            <FormControl>
            <FormLabel>Activé?</FormLabel>
            <Select
              name="active"
              value={values.active}
              onChange={handleInputChanges}
            >
              <MenuItem value={true}>Activé</MenuItem>
              <MenuItem value={false}>Desactivé</MenuItem>
            </Select>
          </FormControl>
          <CheckBoxMe
          name='active2'
          label='Active ?'
          value={values.active2}
          onChange={handleInputChanges} 
          />
          <div>
            <Controls.ButtonMe 
             type='submit'
             text='Enregistrer'
            />
            <Controls.ButtonMe
             text='Anuller'
             color='default'
             onClick={resetForm} 
            />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
};