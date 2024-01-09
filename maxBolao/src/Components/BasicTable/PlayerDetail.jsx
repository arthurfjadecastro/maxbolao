import { Dialog, DialogContent, DialogTitle, TableBody, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import { StyledTable, StyledTableCell } from './TableStyle'

export default function PlayerDetail({selectedRowInfo,handleCloseDialog,dialogOpen}) {
  return (
    <>
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
  )
}
