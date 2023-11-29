import React from 'react';
import "./home.css";
import Navbar from './Navbar/navbar';
import { Box, Grid, Typography } from '@mui/material';
import useResultsFootball from "../../Network/useResultsFootball";
import { BasicCard } from '../BasicCard';
import { BasicTable } from '../BasicTable';


function createData(
  pos,
  name,
  pontos,
  sg,
  premio,
  clubes,
) {
  return { pos, name, pontos, sg, premio, GP1: clubes[0], GP2: clubes[1], GP3: clubes[2], GP4: clubes[3] };
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
        competidor.Clubes.map((clube) => clube.Clube), // Os nomes dos clubes
      );
    });
  }


  return (
    <> 
    <Navbar />
    <Grid container direction={"column"} style={{margin: 0, marginTop: 0 }}>
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
        </Grid>
        <div className='backgroundpage'>
        {/* <Grid item style={{ display: "flex", justifyContent: "center" }}>
        <Grid item> */}
        {/* </Grid> */}
        <div style={{marginBottom: 32}}>
            <Typography textAlign={"center"} color="white" variant="h1" className="title">Bolão do Max </Typography>
            <Typography textAlign={"center"} color="white" variant="h5" className="title">  Resultados em Tempo Real</Typography>
            </div>
        <Grid style={{position: "relative"}} item>
        <div style={{position: "absolute", left: 0, top: -194}}>
            <img
              src="/Images/max.png"
              alt="Slide 2"
              style={{
                width: 184,
                height: "auto"
              }}
            />
         </div>
        </Grid>
        {/* </Grid> */}
        <Grid container >
        <BasicTable rows={dataRows} />
        </Grid>
        <div className="Regras">
          <div className='Row'>
        <BasicCard />

          </div>
        </div>
        {/* <Typography color="white" variant="h4" className="title">Regras </Typography> */}
    </div>
    </>
  );
}

export default Home;
