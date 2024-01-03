import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Dialog, DialogTitle, DialogContent, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledTableContainer = styled(TableContainer)({
  margin: 0,
  marginTop: 0,
  background: "#484848",
});

const StyledTable = styled(Table)({
  minWidth: 650,
});

const StyledTableHeadCell = styled(TableCell)(({ theme, header }) => ({
  color: header ? "#A8A8A8" : "#F2F2F2",
  fontFamily: "Satoshi",
  fontSize: 16,
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal"
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:last-child td, &:last-child th': {
    border: 0,
  },
  cursor: 'pointer',
  "&:hover": {
    backgroundColor: "#313131",
  },
}));

function BasicTable({ rows }) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedRowInfo, setSelectedRowInfo] = useState(null);
  const winnerColor = (index) => {
    if(index === 0 || index === 1 || index === 2 || index === rows.length - 1) {
      return "#B1FF74"
    }
  }
  const handleRowClick = (row) => {
    setSelectedRowInfo(row);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };
  return (
    <>
    <StyledTableContainer component={Paper}>
      <StyledTable aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableHeadCell header={true}>Posição</StyledTableHeadCell>
            <StyledTableHeadCell header={true} align="right">Nome</StyledTableHeadCell>
            <StyledTableHeadCell header={true} align="right">Pontos</StyledTableHeadCell>
            <StyledTableHeadCell header={true} align="right">Saldo de Gols</StyledTableHeadCell>
            <StyledTableHeadCell header={true} align="right">Prêmio</StyledTableHeadCell>
            <StyledTableHeadCell header={true} align="right">GP1</StyledTableHeadCell>
            <StyledTableHeadCell header={true} align="right">GP2</StyledTableHeadCell>
            <StyledTableHeadCell header={true} align="right">GP3</StyledTableHeadCell>
            <StyledTableHeadCell header={true} align="right">GP4</StyledTableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
           <StyledTableRow key={index + 1} onClick={() => handleRowClick(row)}>
              <StyledTableHeadCell component="th" scope="row">{index + 1}</StyledTableHeadCell>
              <StyledTableHeadCell align="right">{row.name}</StyledTableHeadCell>
              <StyledTableHeadCell align="right">{row.pontos}</StyledTableHeadCell>
              <StyledTableHeadCell align="right">{row.sg}</StyledTableHeadCell>
              <StyledTableHeadCell style={{color: winnerColor(index)}} align="right">{row.premio}</StyledTableHeadCell>
              <StyledTableHeadCell align="right">{row.GP1}</StyledTableHeadCell>
              <StyledTableHeadCell align="right">{row.GP2}</StyledTableHeadCell>
              <StyledTableHeadCell align="right">{row.GP3}</StyledTableHeadCell>
              <StyledTableHeadCell align="right">{row.GP4}</StyledTableHeadCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </StyledTable>
    </StyledTableContainer>
    <Dialog open={dialogOpen} onClose={handleCloseDialog}>
    <DialogTitle>Informações da Linha</DialogTitle>
    <DialogContent>
      {selectedRowInfo && (
        <>
          <Typography>Nome: {selectedRowInfo.name}</Typography>
          <Typography>Pontos: {selectedRowInfo.pontos}</Typography>
          <Typography>Saldo de Gols: {selectedRowInfo.sg}</Typography>

        </>
      )}
    </DialogContent>
  </Dialog>
  </>
  );
}

export default BasicTable;
