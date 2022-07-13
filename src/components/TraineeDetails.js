import { Button, TextField } from '@mui/material';
import React, { useState, useEffect, } from 'react';
import { useParams } from 'react-router-dom' ;
import api from '../services/api';



const Formtrainee = () => {

    const {id} = useParams(); //taking id from url params
    const [traineeData, setTraineeData] =useState([]) // Creating State OBJ from trainee for able to edit

    useEffect(() => { //Creating the effect to listen the obj 
        try {
            const selectTraineeById = async () => { //this function makes the connection with the DB and places the object inside the setData if the answer is OK
                 await api.get(`/trainee/${id}`).then((res)=> setTraineeData(res.data))
                }
                selectTraineeById();
        } catch (error) {
            console.log(error);
        };
    }, [id]);
   
  
    // const [listTraineeData, setData] =  useState({})
    // useEffect(() => {
    //  api.get("/trainee").then((res) => setData(res.data))
    //     console.log(setData);
    // }, []);


// const iniState  = {idform: id, first_name: traineeData.first_name, last_name:'ulti nome'}

const [formValues, setFormValues] = useState(traineeData) 



const handleInputChange = (e) => {
    const {name, value} =e.target;
   setFormValues({...formValues, [name]: value})
}
console.log('**********form value', formValues);

// const [name, setName] = useState(id)
// console.log(name);

// const handleInputChange = (e) =>{
//     console.log('handleInputChange****** ', e.target.value);
//     setName(e.target.value)
// }


// ############### Form submit 
const formSubmit = (e, traine) => {
    e.preventDefault();
     
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log('submit', data);
    
}


return (
    <div>
    {
       
         traineeData.map((traineeDetails) => (
            <form key={traineeData.id} onSubmit={formSubmit}>
                <TextField id="outlined-basic" label="Id" variant="outlined" name='id' autoComplete='false' onChange={handleInputChange} value={formValues.id} />
                <TextField id="outlined-basic" label="Prénom" variant="outlined" name='first_name' autoComplete='false' onChange={handleInputChange} value={formValues.first_name}/>
                <TextField id="outlined-basic" label="Nom" variant="outlined" name='last_name' autoComplete='false' onChange={handleInputChange} />
                <TextField id="outlined-basic" label="Num Sociale" variant="outlined" name='num_soci' autoComplete='false' onChange={handleInputChange} />
                <TextField id="outlined-basic" label="Date Naissance" variant="outlined" name='birthdate' autoComplete='false' onChange={handleInputChange} />
                <TextField id="outlined-basic" label="Adresse1" variant="outlined" name='addresse1' autoComplete='false' onChange={handleInputChange}/>
                <TextField id="outlined-basic" label="Adresse2" variant="outlined" name='addresse2' autoComplete='false' onChange={handleInputChange} />
                <TextField id="outlined-basic" label="Ville" variant="outlined" name='city' autoComplete='false' onChange={handleInputChange} />
                <TextField id="outlined-basic" label="Pays" variant="outlined" name='country' autoComplete='false' onChange={handleInputChange} />
                <TextField id="outlined-basic" label="Code Postale" variant="outlined" name='zip_code' autoComplete='false' onChange={handleInputChange} />
                <select name='active' onChange={handleInputChange} value={formValues.active}>
                    <option value={true}>Activé</option>
                    <option value={false}>Desactivé</option>
                </select>
                <Button variant="contained" type='submit'>Enregistrer</Button>
              

            </form>
         ))
        
    }
    </div>
    
)
}

export default Formtrainee;