import { Box, Button, FormControl, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';
import '../css/modalConventionDetails.scss'
import ModalUpdConvention from './ModalUpdConvention';


const ModalConventionDetails = (props) => {

    const [isModalAddTraineeVisible, setModalAddTraineeVisible] = useState(false);
     const convention = props.data;
    // console.log(convention.id);
    console.log(props);
    // console.log(convention.miss_todo);


    return (
        <div className='modal'>
            <div className='container'>
                <div className='titleForm'>
                    <h1>Détails de la convention</h1>
                </div>
                <div className='headerFormConvetionsDetails'>
                   <form className='formModalConventionDetails'>
                        <Button className='btnClose' variant='contained' onClick={(e) => props.onClose()}>Close</Button>
                        <Button className='btnAddTrainee' variant='contained' size='small' onClick={() => {setModalAddTraineeVisible(true)}}>Modifier Convention + </Button>
                        {isModalAddTraineeVisible ? (<ModalUpdConvention onClose={()=> setModalAddTraineeVisible(false)} ><h2>Modal Modifier</h2></ModalUpdConvention> ): null}
                        <div className='containerFormModalConventionDetails'>
                            <div className='fieldsFormAddConvention'>
                                <TextField id="outlined-basic" label="Code Convention" variant="outlined" name='id_trainee' value={convention.id}  />
                                    <TextField id="outlined-basic" label="Code Stagiaire" variant="outlined" name='id_trainee'value={convention.id_trainee}/>
                                    <TextField id="outlined-basic" label="Date convention" variant="outlined" name='dt_conv' value={convention.dt_conv} />
                                    <TextField id="outlined-basic" label="Debut du Stage" variant="outlined" name='dt_start_trainee' value={convention.dt_start_trainee}/>
                                    <br/>
                                    <TextField id="outlined-basic" label="Fin du Stage" variant="outlined" name='dt_end_trainee' value={convention.dt_end_trainee} />
                                    <TextField id="outlined-basic" label="Centre de Formation" variant="outlined" name='school'value={convention.school}/>
                                    <br/>
                                    <TextField id="outlined-basic" label="Mission à Faire" variant="outlined" name='miss_todo' value={convention.miss_todo}/>
                                    <TextField id="outlined-basic" label="Début de Mission" variant="outlined" name='dt_start_mission' value={convention.dt_start_mission}/>
                                    <TextField id="outlined-basic" label="Fin de Mission" variant="outlined" name='dt_end_mission' value={convention.dt_end_mission}/>
                                    <TextField fullWidth label="Commentaires" id="fullWidth" name='commentaires' value={convention.commentaires}/>
                                    <br/>
                                    <TextField id="outlined-basic" label="Visa" variant="outlined" name='visa' value={convention.visa}/>
                                    <TextField id="outlined-basic" label="Remuneration" variant="outlined" name='remuneration' value={convention.remuneration}/>
                                    {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                                    <Select labelId="demo-simple-select-label" id="demo-simple-select" value={convention.active} name='active' label="Active?" >
                                        <MenuItem value={true}>Activé</MenuItem>
                                        <MenuItem value={false}>Désactivé</MenuItem>
                                    </Select>
                                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                                </div>
                            </div>
                         </form>
                   </div>
            </div>
        </div>
    );
};

export default ModalConventionDetails;