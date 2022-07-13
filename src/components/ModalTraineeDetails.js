import { Button, Checkbox, FormControl, FormControlLabel, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField } from '@mui/material';
// import Deleticon from '@micons-material'
import React, { useState } from 'react';
import '../css/modalTraineeDetails.scss'
// import api from '../services/api';
import ModalUpdTrainee from './ModalUpdTrainee';

const ModalTraineeDetails = (props) => {

  
    const traineeData = props.data;
    console.log('trainee ***** ', traineeData);
 


    // const [listConventionData, setData] =  useState([])

        // useEffect(() => {
        //   // axios.get("http://localhost:6300/api/v1/convention").then((res) => setData(res.data))
        //   try {
        //     const SselectConventionByTrainee = async () => {
        //         await api.get(`/convention/${traineeData.id}`).then((res) => setData(res.data))
        //     }
        //     } catch (error) {
        //         console.log(error);
        //   }
          

        // }, [traineeData.id])

// ############################################################## List of convenctions

const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
    {
      id: 'population',
      label: 'Population',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'size',
      label: 'Size\u00a0(km\u00b2)',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'density',
      label: 'Density',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toFixed(2),
    },
  ];
  
  function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
  }

  const rows = [
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
  ];

  
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
// ######################################## end list of convections
 



     const [isModalUpdTraineevisible, setModalUpdTraineevisible] = useState(false);
     
     const [checked, setChecked] = useState(true)
     const handleChange = (event) => {
      setChecked(event.target.checked);
    };
  

    
    return (
        <div className='modal'>
            <div className='container'>
                <div className='headerFormTraineeDetails'>
                  <div className='formModalTraineeDetails'>
                  <Button className='btnAddTrainee' variant='contained' size='small' onClick={() => {setModalUpdTraineevisible(true)}}>Modifier Stagiaire + </Button>
                          {isModalUpdTraineevisible ? (<ModalUpdTrainee onClose={()=> setModalUpdTraineevisible(false)} ><h2>Modal Modifier</h2></ModalUpdTrainee> ): null}
                  <Button className='closeModal' onClick={(e) => props.onClose()} variant="outlined"> Close</Button>
                  <div className='containerformModalTraineeDetails'>
                    <FormControl fullWidth={true}>
                      <TextField id="filled-read-only-input"  value={traineeData.id} label="Code du Stagiaire"  InputProps={{readOnly: true,}}variant="filled"/>
                      <TextField id="filled-read-only-input"  value={traineeData.first_name} label="Prénom"  InputProps={{readOnly: true,}}variant="filled"/>
                      <TextField id="filled-read-only-input"  value={traineeData.last_name} label="Nom"  InputProps={{readOnly: true,}}variant="filled"/>
                      <br />
                      <TextField id="filled-read-only-input"  value={traineeData.num_soci} label="Num Social" defaultValue={traineeData.num_soci} InputProps={{readOnly: true,}}variant="filled"/>
                      <br />
                      <TextField id="filled-read-only-input"  value={traineeData.birthdate} label="Date Naissance" defaultValue={traineeData.birthdate} InputProps={{readOnly: true,}}variant="filled"/>
                      <TextField id="filled-read-only-input"  value={traineeData.addresse1} label="Adresse 1" defaultValue={traineeData.addresse1} InputProps={{readOnly: true,}}variant="filled"/>
                      <TextField id="filled-read-only-input"  value={traineeData.addresse2} label="Adresse 2"  InputProps={{readOnly: true,}}variant="filled"/>
                      <TextField id="filled-read-only-input"  value={traineeData.city} label="Ville"  InputProps={{readOnly: true,}}variant="filled"/>
                      <TextField id="filled-read-only-input"  value={traineeData.country} label="Pays"  InputProps={{readOnly: true,}}variant="filled"/>
                      <TextField id="filled-read-only-input"  value={traineeData.zip_conde} label="Code Postal" InputProps={{readOnly: true,}}variant="filled"/>
                      <FormControlLabel value="top" control={<Checkbox />} label="Top" labelPlacement="top"
        />
                      
                      </FormControl>
                      {/* <div className='content'>{props} </div> */}
                  </div>
                </div>
              </div>
            </div>
             <div className='listConventions' >
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
              <TableContainer sx={{ maxHeight: 200 }}>
                    <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                        {columns.map((column) => (
                            <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                            >
                            {column.label}
                            </TableCell>
                        ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => {
                            return (
                            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                {columns.map((column) => {
                                const value = row[column.id];
                                return (
                                    <TableCell key={column.id} align={column.align}>
                                    {column.format && typeof value === 'number'
                                        ? column.format(value)
                                        : value}
                                    </TableCell>
                                );
                                })}
                            </TableRow>
                            );
                        })}
                    </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
                </Paper>
           </div> 
        </div>
    )
};

export default ModalTraineeDetails;