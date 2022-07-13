import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import api from '../services/api';
// import TraineeDetails from './TraineeDetails';
import ModalTraineeDetails from './ModalTraineeDetails';
import { useNavigate } from "react-router-dom";
import { Button} from '@mui/material';
// import '../css/styles.scss';
import ModalAddTrainee from './ModalAddTrainee';
import { Box, style } from '@mui/system';





// css
// Styling the StyleTableCell theme 
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 13,
  },
}));
// Styling the StyleTableCell theme 
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
    
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));




const Tabletrainee = () => {
  
  let navigate = useNavigate();
  

  const [isModalTraineeDetailsVisible, setModalTraineeDetailsVisible] = useState(false);

  const [isModalAddTraineeVisible, setModalAddTraineeVisible] = useState(false);

  const [traineeData, setTraineeData] = useState()

    const [listTraineeData, setData] =  useState([])

        useEffect(() => {
        api.get("/trainee").then((res) => setData(res.data))
    
        }, []);

        
  const traineeSelectById = (e, listTrainee) => {
    
    setTraineeData(listTrainee); //passa um objeto à outro objeto
  
  
  
    // e.preventDefault();
    // e.stopPropagation(); //
    setModalTraineeDetailsVisible(true);
    //chamar o objeto que antes era : TraineeDetails

  
  
  } 
  // onClose={()=> {setModalAddTraineeVisible(true)}}
console.log('LOG DATA TRAINEE****', traineeData);


  return (
    <div className='headerFormTrainee'>
      <div className='divBtnAddTrainee'>
        <Button className='btnAddTrainee' variant='contained' size='small' onClick={(e) => setModalAddTraineeVisible(true)}>Nouveau Stagiaire + </Button>
        {isModalAddTraineeVisible ? (<ModalAddTrainee onClose={()=> setModalAddTraineeVisible(false)} ><h2>Modal ADD</h2></ModalAddTrainee> ): null}


        {/* ################## DETAIL TRAINEE */}
        {isModalTraineeDetailsVisible ? (<ModalTraineeDetails data={traineeData}  onClose={()=> setModalTraineeDetailsVisible(false)} ><h2>Modal Details Trainee</h2></ModalTraineeDetails> ): null}
      </div>
      
      <div className='tableConteinerTrainee' >
        <TableContainer  component={Paper}>
        <Table sx={{maxWidth: 600 }} aria-label="Table Estagiaire" align='center' >
          <TableHead>
            <TableRow>
              <StyledTableCell align="right">Près nom</StyledTableCell>
              <StyledTableCell align="right">Nom</StyledTableCell>
              <StyledTableCell align="right">N° Séc. Sociale</StyledTableCell>
              <StyledTableCell align="right">Ville</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              // Creating a map with date from listTraineeData, commes to the API BDD
              listTraineeData.map((listTrainee) => (
                <StyledTableRow key={listTrainee.id}> 
                  {/*Exposing data*/}
                    <StyledTableCell>{listTrainee.first_name}</StyledTableCell>
                    <StyledTableCell>{listTrainee.last_name}</StyledTableCell>
                    <StyledTableCell>{listTrainee.num_soci}</StyledTableCell>
                    <StyledTableCell>{listTrainee.addresse1}</StyledTableCell>
                    <StyledTableCell>{listTrainee.active}</StyledTableCell>
                    <StyledTableCell>
                    <Button variant='contained' size='small'  onClick={((e)=>traineeSelectById(e, listTrainee) )}> Details modal</Button>
                    {/* { isModalTraineeDetailsVisible ? (<ModalTraineeDetails data={listTrainee} onClose={()=>{setModalTraineeDetailsVisible(true)}}></ModalTraineeDetails> ): null} */}
                      
                      {/* <Button variant='contained' size='small' listTrainee={listTrainee} onClick={(e) => traineeSelectById(e, listTrainee)}> Details</Button> */}
                   <p></p>
                      {/* <Button variant='contained' size='small' onClick={(e) => traineeSelectById(e, listTrainee)}> Modal</Button> */}
                    <p></p>
                    {/* <Button variant='contained' size='small' onClick={(e) => navigate(`/traineedetails/${listTrainee.id}`)}>New</Button> */}
                    {/* <StyledTableRow>  
                        <div className='buttons'>
                        </div>
                      </StyledTableRow> */}
                  </StyledTableCell>
                  </StyledTableRow>
                
              ))
              
            }
          </TableBody>
        </Table>

        {/* <TraineeDetails  data={{ first_name:'Rhayonne', last_name:'Lopes'} }/> */}
      </TableContainer>

      </div>
     </div>
 );
};

export default Tabletrainee;