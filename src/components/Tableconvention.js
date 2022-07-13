import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {AiOutlineFolderOpen} from '@react-icons/all-files/ai/AiOutlineFolderOpen';
import api from '../services/api';
import { Button } from '@mui/material';
import ModalConventionDetails from './ModalConventionDetails';
import ModalAddConvention from './ModalAddConvention';




const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 13,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
    
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const TableConvention = () => {

  const [isModalConventionDetailsVisible, setModalConventionDetailsVisible ] = useState(false)
  const [isModalAddConventionVisible, setModalAddConventionVisible] = useState(false)

  const [listConventionData, setData] =  useState([])
        useEffect(() => {
          // axios.get("http://localhost:6300/api/v1/convention").then((res) => setData(res.data))
          api.get("/convention").then((res) => setData(res.data))

        }, [])


  return (
      <><div className='headerFormConvention'>
          <div className='divBtnAddConvention'>
            <Button className='btnAddConvention' variant='contained' size='small' onClick={() => setModalAddConventionVisible(true)}>Nouvelle Convention +</Button>
            {isModalAddConventionVisible ? (<ModalAddConvention onClose={()=> setModalAddConventionVisible(false)}></ModalAddConvention> ) : null}

        </div>

    </div><div className='tableContainerConvention'>
        <TableContainer component={Paper}>
          <Table sx={{ maxWidth: 600 }} aria-label="Table Estagiaire" align='center'>
            <TableHead>
              <TableRow>
                {/* <StyledTableCell align="right"></StyledTableCell> */}
                <StyledTableCell align="right">Code Ceonvention</StyledTableCell>
                <StyledTableCell align="right">Code Stagiaire</StyledTableCell>
                <StyledTableCell align="right">Date Convention</StyledTableCell>
                <StyledTableCell align="right">Date: Debut de Stage</StyledTableCell>
                <StyledTableCell align="right">Date: Fins de Stage</StyledTableCell>
                <StyledTableCell align="right">Centre de formation</StyledTableCell>
                {/* <StyledTableCell align="right">Mission à faire</StyledTableCell> */}
                {/* <StyledTableCell align="right">Début de mission</StyledTableCell> */}
                {/* <StyledTableCell align="right">Fin de mission</StyledTableCell> */}
                {/* <StyledTableCell align="right">Commentaires / OBS</StyledTableCell> */}
                <StyledTableCell align="right">Visa</StyledTableCell>
                {/* <StyledTableCell align="right">Remuneration</StyledTableCell> */}
                {/* <StyledTableCell align="right">Active</StyledTableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {
                // Creating a map with date from listConventionData, commes to the API BDD
                listConventionData.map((listConventionData) => (
                  <StyledTableRow key={listConventionData.id}> {/*Indexing and Identifying th unique key (id) to the table, on wych row from this map*/}
                    {/*Exposing data*/}
                    <StyledTableCell>{listConventionData.id}</StyledTableCell>
                    <StyledTableCell>{listConventionData.id_trainee}</StyledTableCell>
                    <StyledTableCell>{listConventionData.dt_conv}</StyledTableCell>
                    <StyledTableCell>{listConventionData.dt_start_trainee}</StyledTableCell>
                    <StyledTableCell>{listConventionData.dt_end_trainee}</StyledTableCell>
                    <StyledTableCell>{listConventionData.school}</StyledTableCell>
                    {/* <StyledTableCell>{listConventionData.miss_todo}</StyledTableCell> */}
                    {/* <StyledTableCell>{listConventionData.dt_start_mission}</StyledTableCell> */}
                    {/* <StyledTableCell>{listConventionData.dt_end_mission}</StyledTableCell> */}
                    {/* <StyledTableCell>{listConventionData.commentaires}</StyledTableCell> */}
                    <StyledTableCell>{listConventionData.visa}</StyledTableCell>
                    {/* <StyledTableCell>{listConventionData.remuneration}</StyledTableCell> */}
                    {/* <StyledTableCell>{listConventionData.active}</StyledTableCell> */}
                    <StyledTableCell>
                      <StyledTableRow>
                        <div className='divConventionDetails'>
                          <button className='btnConventionDetails'  onClick={()=> setModalConventionDetailsVisible(true)}><AiOutlineFolderOpen>Détails</AiOutlineFolderOpen></button>
                          {isModalConventionDetailsVisible ? <ModalConventionDetails data={listConventionData} onClose={()=> setModalConventionDetailsVisible(false)}><h2>Détail de la convention</h2></ModalConventionDetails> : null}
                        </div>
                      </StyledTableRow>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div></>    
  );
};

export default TableConvention;