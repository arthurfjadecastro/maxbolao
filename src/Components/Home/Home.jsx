import React from 'react';
import "./home.css";
import Navbar from './Navbar/navbar';
import { Box, Grid, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import useResultsFootball from "../../Network/useResultsFootball";

function createData(
  pos: string,
  name: number,
  pontos: number,
  sg: number,
  premio: number,
  clubes: Array<string>,
) {
  return { pos, name, pontos, sg, premio, GP1: clubes[0], GP2: clubes[1], GP3: clubes[2], GP4: clubes[3] };
}

function BasicTable({ rows }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell>Posição</TableCell>
            <TableCell align="right">Nome</TableCell>
            <TableCell align="right">Pontos</TableCell>
            <TableCell align="right">Saldo de Gols</TableCell>
            <TableCell align="right">Prêmio</TableCell>
            <TableCell align="right">GP1</TableCell>
            <TableCell align="right">GP2</TableCell>
            <TableCell align="right">GP3</TableCell>
            <TableCell align="right">GP4</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index + 1}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.pontos}</TableCell>
              <TableCell align="right">{row.sg}</TableCell>
              <TableCell align="right">{row.premio}</TableCell>
              <TableCell align="right">{row.GP1}</TableCell>
              <TableCell align="right">{row.GP2}</TableCell>
              <TableCell align="right">{row.GP3}</TableCell>
              <TableCell align="right">{row.GP4}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function BasicCard() {
  return (
    <Card>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

function Home() {
  const [useResults, error] = useResultsFootball();

  let dataRows = [];

  if (useResults && useResults.data && useResults.data.Competidores) {
    console.log(useResults.data.Competidores)
    dataRows = useResults.data.Competidores.map((competidor) => {
      return createData(
        "", // pos (não tenho informações sobre a posição no JSON)
        competidor.Nome,
        competidor.Pontos,
        competidor.Saldo_Gols,
        competidor.Premio,
        competidor.Clubes.map((clube) => clube.Clube), // Mapeie os nomes dos clubes
      );
    });
  }


  return (
    <div className='backgroundpage'>
      <Navbar />
      <Grid container direction={"column"} style={{marginTop: 64 }}>
        <Grid item>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src="/Images/brasileirao.png"
              alt="Slide 2"
              style={{
                height: "auto",
                width: "100%"
              }}
            />
          </Box>
        </Grid>
        <Grid item style={{ display: "flex", justifyContent: "center" }}>
          <Typography color="white" variant="h1" className="title">Titulo </Typography>
          <Typography color="white" variant="h3" className="title">Subtitulo </Typography>
        </Grid>
        <BasicTable rows={dataRows} />
        <Typography color="white" variant="h4" className="title">Regras </Typography>
        <BasicCard />
        {/* Adicione mais instâncias de BasicCard conforme necessário */}
      </Grid>
    </div>
  );
}

export default Home;
