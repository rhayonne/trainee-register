import { Button, FormControl, Grid, MenuItem, Select, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import '../css/styles.scss';
import api from '../services/api';
// import api from '../services/api';
// import 'date-fns'
// import Grid from '@mui/material';
// import DateFnsUtils from '@date-io/date-fns/build/date-fns-utils';




const useStyle = makeStyles (theme => ({
    root: {
            '& .MuiFormControl-root': {
            width:'80%',
            margin: theme.spacing(1)
        
        }
    }
}))

const InitValues ={

    id: 1,
    first_name: "",
    last_name: "",
    num_soci: 123,
    birthdate: new Date(),
    addresse1: "",
    addresse2: "",
    city: "",
    country: "",
    zip_code: "",
    active: true,
}


const ModalAddTrainee = (props) => {


    const [values, setValues] = useState(InitValues);
    const classes = useStyle
    

    return (
        <>
        <form className={classes.root}>
        <Button className='btnClose' variant='contained' onClick={(e) => props.onClose()}>Close</Button>
            <Grid container>
            
                <Grid item xs={6}>
                
                    <TextField variant='outlined' label="Prénom" value={values.first_name}/>
                    <TextField variant='outlined' label="Prénom" value={values.last_name}/>
                    <TextField variant='outlined' label="Prénom" value={values.num_soci}/>
                    <TextField variant='outlined' label="Prénom" value={values.birthdate}/>
                    <TextField variant='outlined' label="Prénom" value={values.addresse1}/>
                    <TextField variant='outlined' label="Prénom" value={values.addresse2}/>
                    <TextField variant='outlined' label="Prénom" value={values.city}/>
                    <TextField variant='outlined' label="Prénom" value={values.country}/>
                    <TextField variant='outlined' label="Prénom" value={values.zip_code}/>
                    <TextField variant='outlined' label="Prénom" value={values.active}/>
                </Grid>
                <Grid item xs={6}></Grid>
            </Grid>
        </form>
        
        
        </>

    )


};

export default ModalAddTrainee;
       












//     const [formVamlues, setformValues] = useState({});


//     const[addFormData, setAddFormData] = useState({});


    
//     const handleInputChange = (e) => {
//         // console.log('valor de ', e);
//     const {name, value} = e.target;
//     setformValues({...formVamlues, [name]: value});
//     console.log('imput change******** ',name, value);
//    }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const formData = new FormData(e.target);
//         const dataForm = Object.fromEntries(formData);

//         console.log('Form*************', dataForm);
//     }
    
//         // useEffect(() => {
//         //     api.post("/trainee/").then((res) => setData(res.data))
//         // }, []);

//     console.log('Forrrmmm values', formVamlues);
//     return (
//         <div className='modal'>
//             <div className='container'>
//                 <FormControl fullWidth>
//                     <div className='headerFormAddTrainee'>
//                         <Button className='btnClose' variant='contained' onClick={(e) => props.onClose()}>Close</Button>
//                         <div className='content'>{props.children}</div>
//                         <form className='formAddTrainee' onSubmit={handleSubmit}>
//                             <div className='containerFormAddTrainee'>
//                                 <div className='fieldsAddTrainee'>
//                                     <TextField id="outlined-basic" label="Prénom" variant="outlined" name='first_name' onChange={handleInputChange}/>
//                                     <TextField id="outlined-basic" label="Nom" variant="outlined" name='last_name' onChange={handleInputChange}/>
//                                     <TextField id="outlined-basic" label="Num Sociale" variant="outlined" name='num_soci' onChange={handleInputChange}/>
//                                     <TextField id="outlined-basic" label="Date Naissance" variant="outlined" name='birthdate' onChange={handleInputChange}/>
//                                     <TextField id="outlined-basic" label="Adresse 1" variant="outlined" name='addresse1' onChange={handleInputChange}/>
//                                     <TextField id="outlined-basic" label="Adresse 2" variant="outlined" name='addresse2' onChange={handleInputChange}/>
//                                     <TextField id="outlined-basic" label="Ville" variant="outlined" name='city' onChange={handleInputChange} />
//                                     <TextField id="outlined-basic" label="Pays" variant="outlined" name='country' onChange={handleInputChange}/>
//                                     <TextField id="outlined-basic" label="Code Postale" variant="outlined" name='zip_code' onChange={handleInputChange}/>
//                                     <Select labelId="demo-simple-select-label" id="demo-simple-select" name='active' value={true} label="Active?" onChange={handleInputChange}>
//                                     <MenuItem value={true}>Activé</MenuItem>
//                                     <MenuItem value={false}>Désactivé</MenuItem>
//                                 </Select>
//                                 <Button type='submit' >Enregistrer </Button>
//                                 </div>
//                             </div>
//                         </form>
//                         </div>
//                 </FormControl>
//             </div>
//         </div>
//     );



//     // return (
//     //     <div className='modal' onClick={props.onClose()} >
//     //         <div className='container'>
//     //             <h1>ADD trainee</h1>
//     //             <button className='closeModal' onClick={props.onClose()})}  />
//     //             <Button onClick={props.onClose()} variant='contained'> Close </Button>
//     //             <TextField id="filled-read-only-input" label="Read Only" defaultValue="Hello World" InputProps={{readOnly: true,}}variant="filled"/>
//     //             <div className='content'>{props.children}
//     //             </div>
//     //         </div>
//     //     </div>
//     // );
