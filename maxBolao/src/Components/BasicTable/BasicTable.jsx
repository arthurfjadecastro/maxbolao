import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Dialog, DialogTitle, DialogContent, Typography, TableTheme } from "@mui/material";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      paper: '#484848',
      default: '#484848',
    },
  },
});

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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  color: "#F2F2F2",
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
    <ThemeProvider theme={darkTheme}>
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
                  <StyledTableCell component="th" scope="row">{index + 1}</StyledTableCell>
                  <StyledTableCell align="right">{row.name}</StyledTableCell>
                  <StyledTableCell align="right">{row.pontos}</StyledTableCell>
                  <StyledTableCell align="right">{row.sg}</StyledTableCell>
                  <StyledTableCell style={{color: winnerColor(index)}} align="right">{row.premio}</StyledTableCell>
                  <StyledTableCell align="right">{row.GP1.Clube}</StyledTableCell>
                  <StyledTableCell align="right">{row.GP2.Clube}</StyledTableCell>
                  <StyledTableCell align="right">{row.GP3.Clube}</StyledTableCell>
                  <StyledTableCell align="right">{row.GP4.Clube}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </StyledTable>
        </StyledTableContainer>
        <Dialog open={dialogOpen} onClose={handleCloseDialog}>
          <DialogTitle>Informações Gerais</DialogTitle>
          <DialogContent>
            {selectedRowInfo && (
              <>
                <Typography>Nome: {selectedRowInfo.name}</Typography>
                <Typography>Pontos: {selectedRowInfo.pontos}</Typography>
                <Typography>Saldo de Gols: {selectedRowInfo.sg}</Typography>

                <StyledTable>
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Clube</StyledTableCell>
                      <StyledTableCell>Pontos</StyledTableCell>
                      <StyledTableCell>Jogos</StyledTableCell>
                      <StyledTableCell>Saldo de Gols</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {['GP1', 'GP2', 'GP3', 'GP4'].map((gp) => (
                      <TableRow key={gp}>
                        <StyledTableCell>{selectedRowInfo[gp].Clube}</StyledTableCell>
                        <StyledTableCell>{selectedRowInfo[gp].pontos}</StyledTableCell>
                        <StyledTableCell>{selectedRowInfo[gp].jogos}</StyledTableCell>
                        <StyledTableCell>{selectedRowInfo[gp].saldoGols}</StyledTableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </StyledTable>
              </>
            )}
          </DialogContent>
        </Dialog>
      </>
    </ThemeProvider>
  );
}

export default BasicTable;
