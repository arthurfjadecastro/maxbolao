import React, { useState } from 'react';
import {  TableBody, TableHead, TableRow, Paper, Dialog, DialogTitle, DialogContent, Typography, TableTheme, Skeleton } from "@mui/material";
import {  ThemeProvider } from "@mui/material/styles";
import {
  darkTheme,
  StyledTableContainer,
  StyledTable,
  StyledTableHeadCell,
  StyledTableRow,
  StyledTableCell,
} from './TableStyle';
import {RenderIf} from "../Home/Utils"

function BasicTable({ rows, loadingTable}) {
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

  // console.log("rows",rows)

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
            <RenderIf predicate={loadingTable}>
  {[...Array(30)].map((_, rowIndex) => (
    <StyledTableRow key={rowIndex + 1}>
      {[...Array(9)].map((_, cellIndex) => (
        <StyledTableCell key={cellIndex} component="th" scope="row">
          <Skeleton animation="wave" />
        </StyledTableCell>
      ))}
    </StyledTableRow>
  ))}
</RenderIf>
              <RenderIf predicate={!loadingTable}>
              {rows.map((row, index) => (
                <StyledTableRow key={index + 1} onClick={() => handleRowClick(row)}>
                  <StyledTableCell component="th" scope="row">{ index + 1 }</StyledTableCell>
                  <StyledTableCell align="right">{ row.name   }</StyledTableCell>
                  <StyledTableCell align="right">{row.pontos}</StyledTableCell>
                  <StyledTableCell align="right">{row.sg}</StyledTableCell>
                  <StyledTableCell style={{color: winnerColor(index)}} align="right">{row.premio}</StyledTableCell>
                  <StyledTableCell align="right">{row.GP1.Clube}</StyledTableCell>
                  <StyledTableCell align="right">{row.GP2.Clube}</StyledTableCell>
                  <StyledTableCell align="right">{row.GP3.Clube}</StyledTableCell>
                  <StyledTableCell align="right">{row.GP4.Clube}</StyledTableCell>
                </StyledTableRow>
              ))}        
              </RenderIf>     
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
