import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";



function BasicTable({ rows }) {
    return (
      <TableContainer style={{ margin: 0, marginTop: 0, background: "#484848" }} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{color: "#F2F2F2"}}>Posição</TableCell>
              <TableCell style={{color: "#F2F2F2"}} align="right">Nome</TableCell>
              <TableCell style={{color: "#F2F2F2"}} align="right">Pontos</TableCell>
              <TableCell style={{color: "#F2F2F2"}} align="right">Saldo de Gols</TableCell>
              <TableCell style={{color: "#F2F2F2"}} align="right">Prêmio</TableCell>
              <TableCell style={{color: "#F2F2F2"}} align="right">GP1</TableCell>
              <TableCell style={{color: "#F2F2F2"}} align="right">GP2</TableCell>
              <TableCell style={{color: "#F2F2F2"}} align="right">GP3</TableCell>
              <TableCell style={{color: "#F2F2F2"}} align="right">GP4</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index + 1}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell style={{color: "#F2F2F2"}} component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell style={{color: "#F2F2F2"}} align="right">{row.name}</TableCell>
                <TableCell style={{color: "#F2F2F2"}} align="right">{row.pontos}</TableCell>
                <TableCell style={{color: "#F2F2F2"}} align="right">{row.sg}</TableCell>
                <TableCell style={{color: "#F2F2F2"}} align="right">{row.premio}</TableCell>
                <TableCell style={{color: "#F2F2F2"}} align="right">{row.GP1}</TableCell>
                <TableCell style={{color: "#F2F2F2"}} align="right">{row.GP2}</TableCell>
                <TableCell style={{color: "#F2F2F2"}} align="right">{row.GP3}</TableCell>
                <TableCell style={{color: "#F2F2F2"}} align="right">{row.GP4}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }


  export default BasicTable;