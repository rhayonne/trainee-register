import { Button, FormControl, MenuItem, Select, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import '../css/styles.scss'
// import api from '../services/api';
// import ReactDatePicker from 'react-datepicker';



const ModalAddConvention = (props) => {
    
    // const [listConventionData, setData] =  useState([])
    // useEffect(() => {
    //   // axios.get("http://localhost:6300/api/v1/convention").then((res) => setData(res.data))
    //   api.post("/convention").then((res) => setData(res.data))

    // }, [])
    // const [active, setActive] = useState(true);

    // const handleChange = (event) => {
    //     setActive(event.target.value);
    // };

    const [formVamlues, setformValues] = useState({});
    
    const handleInputChange = (e) => {
        // console.log('valor de ', e);
    const {name, value} = e.target;
    setformValues({...formVamlues, [name]: value});
    console.log('imput change******** ',name, value);
   }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const dataForm = Object.fromEntries(formData);
        

        console.log('Form*************', dataForm);
    }
    console.log(formVamlues);
    return(
        <div className='modal'>
             
            <div className='container'>
                <h1>Add Convention</h1>
                <div className='headerFormAddConvetions'>
                
                </div>
                    <FormControl>
                        <form className='formAddConvention' onSubmit={handleSubmit}>
                        <Button className='btnClose' variant='contained' onClick={(e) => props.onClose()}>Close</Button>
                        <Box><div className='containerFormAddConvention'>
                            <div className='fieldsFormAddConvention'>
                                {/* <ReactDatePicker placeholderText='Data aqui' selected={startDate} onChange={(date) => setStartDate(date)} /> */}
                                <TextField id="outlined-basic" label="Code Stagiaire" variant="outlined" name='id_trainee' onChange={handleInputChange} />
                                <TextField id="outlined-basic" label="Date convention" variant="outlined" name='dt_conv' onChange={handleInputChange} />
                                <TextField id="outlined-basic" label="Debut du Stage" variant="outlined" name='dt_start_trainee' onChange={handleInputChange} />
                                
                                <br/>
                                <TextField id="outlined-basic" label="Fin du Stage" variant="outlined" name='dt_end_trainee' onChange={handleInputChange} />
                                <TextField id="outlined-basic" label="Centre de Formation" variant="outlined" name='school' onChange={handleInputChange}/>
                                <br/>
                                <TextField id="outlined-basic" label="Mission à Faire" variant="outlined" name='miss_todo' onChange={handleInputChange}/>
                                <TextField id="outlined-basic" label="Début de Mission" variant="outlined" name='dt_start_mission' onChange={handleInputChange}/>
                                <TextField id="outlined-basic" label="Fin de Mission" variant="outlined" name='dt_end_mission' onChange={handleInputChange}/>
                                <TextField fullWidth label="Commentaires" id="fullWidth" name='commentaires' onChange={handleInputChange}/>
                                <br/>
                                <TextField id="outlined-basic" label="Visa" variant="outlined" name='visa' onChange={handleInputChange}/>
                                <TextField id="outlined-basic" label="Remuneration" variant="outlined" name='remuneration' onChange={handleInputChange}/>
                                {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                                <Select labelId="demo-simple-select-label" id="demo-simple-select" value={true} name='active' label="Active?" onChange={handleInputChange}>
                                    <MenuItem value={true}>Activé</MenuItem>
                                    <MenuItem value={false}>Désactivé</MenuItem>
                                </Select>
                                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                            </div>
                            <Button type='submit' variant='contained'>Enregistrer </Button>
                         </div>
                         {/* <Button className='btnClose' variant='contained' onSubmit={}>Enregistrer</Button> */}
                         </Box>
                         </form>
                    </FormControl>
            </div>
        </div>
    );



    // return (
    //     <div className='modal' onClick={props.onClose()} >
    //         <div className='container'>
    //             <h1>ADD trainee</h1>
    //             <button className='closeModal' onClick={props.onClose()})}  />
    //             <Button onClick={props.onClose()} variant='contained'> Close </Button>
    //             <TextField id="filled-read-only-input" label="Read Only" defaultValue="Hello World" InputProps={{readOnly: true,}}variant="filled"/>
    //             <div className='content'>{props.children}
    //             </div>
    //         </div>
    //     </div>
    // );
};

export default ModalAddConvention;