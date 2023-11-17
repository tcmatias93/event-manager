'use client'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
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

function createData(
  nombre: string,
  fecha: number,
  hora: number,
  lugar: number,
  descripcion: string,
) {
  return { nombre, fecha, hora, lugar, descripcion };
}



const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const Event: React.FC = () => {
  const eventos = useSelector((state) => state.events.list);



  console.log('eventos 2 ', eventos)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Eventos</StyledTableCell>
            <StyledTableCell align="right">Fecha</StyledTableCell>
            <StyledTableCell align="right">Hora</StyledTableCell>
            <StyledTableCell align="right">Descripción</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {eventos.map((row) => (
            <StyledTableRow key={row.eventName}>
              <StyledTableCell component="th" scope="row">
                {row.eventName}
              </StyledTableCell>
              <StyledTableCell align="right">{row.eventDate}</StyledTableCell>
              <StyledTableCell align="right">{row.eventHour}</StyledTableCell>
              <StyledTableCell align="right">{row.eventDescription}</StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )

}

export default Event