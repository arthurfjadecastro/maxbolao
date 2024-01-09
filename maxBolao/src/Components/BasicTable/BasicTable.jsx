import React, { useState } from "react";
import {
  TableBody,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  TableTheme,
  Skeleton,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import {
  darkTheme,
  StyledTableContainer,
  StyledTable,
  StyledTableHeadCell,
  StyledTableRow,
  StyledTableCell,
} from "./TableStyle";
import { RenderIf } from "../Home/Utils";
import PlayerDetail from "./PlayerDetail";

function BasicTable({ rows, loadingTable }) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedRowInfo, setSelectedRowInfo] = useState(null);

  const winnerColor = (index) => {
    if (
      index === 0 ||
      index === 1 ||
      index === 2 ||
      index === rows.length - 1
    ) {
      return "#B1FF74";
    }
  };

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
                <StyledTableHeadCell header={true} align="right">
                  Nome
                </StyledTableHeadCell>
                <StyledTableHeadCell header={true} align="right">
                  Pontos
                </StyledTableHeadCell>
                <StyledTableHeadCell header={true} align="right">
                  Saldo de Gols
                </StyledTableHeadCell>
                <StyledTableHeadCell header={true} align="right">
                  Prêmio
                </StyledTableHeadCell>
                <StyledTableHeadCell header={true} align="right">
                  GP1
                </StyledTableHeadCell>
                <StyledTableHeadCell header={true} align="right">
                  GP2
                </StyledTableHeadCell>
                <StyledTableHeadCell header={true} align="right">
                  GP3
                </StyledTableHeadCell>
                <StyledTableHeadCell header={true} align="right">
                  GP4
                </StyledTableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <RenderIf predicate={loadingTable}>
                {[...Array(30)].map((_, rowIndex) => (
                  <StyledTableRow key={rowIndex + 1}>
                    {[...Array(9)].map((_, cellIndex) => (
                      <StyledTableCell
                        key={cellIndex}
                        component="th"
                        scope="row"
                      >
                        <Skeleton animation="wave" />
                      </StyledTableCell>
                    ))}
                  </StyledTableRow>
                ))}
              </RenderIf>
              <RenderIf predicate={!loadingTable}>
                {rows.map((row, index) => (
                  <StyledTableRow
                    key={index + 1}
                    onClick={() => handleRowClick(row)}
                  >
                    <StyledTableCell component="th" scope="row">
                      {index + 1}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.name}</StyledTableCell>
                    <StyledTableCell align="right">
                      {row.pontos}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.sg}</StyledTableCell>
                    <StyledTableCell
                      style={{ color: winnerColor(index) }}
                      align="right"
                    >
                      {row.premio}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.GP1.Clube}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.GP2.Clube}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.GP3.Clube}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.GP4.Clube}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </RenderIf>
            </TableBody>
          </StyledTable>
        </StyledTableContainer>
        <PlayerDetail
          selectedRowInfo={selectedRowInfo}
          handleCloseDialog={handleCloseDialog}
          dialogOpen={dialogOpen}
        />
      </>
    </ThemeProvider>
  );
}

export default BasicTable;
