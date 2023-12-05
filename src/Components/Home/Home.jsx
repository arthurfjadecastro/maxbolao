import React from 'react';
import "./home.css";
import Navbar from './Navbar/navbar';
import { Box, Grid, Typography } from '@mui/material';
import useResultsFootball from "../../Network/useResultsFootball";
import { BasicCard } from '../BasicCard';
import { BasicTable } from '../BasicTable';


const TITLECARDS = [
  "A aposta esse ano custa R$ 120,00\ne deve ser paga antes de acabar o\ncampeonato",
  "Você concorre com a some dos\npontos dos quatro clubes do seu\nconjunto",
  "O saldo de gols dos conjuntos é o\núnico critério de desempate. Caso\npermaneça empatado, o prêmio\nserá dividido",
  "1° lugar recebe R$ 2000\n2° lugar recebe R$ 650\n3° lugar recebe R$ 350\n30° lugar recebe R$ 120",
  "Com os R$ 580 restantes, será feita nossa aposta de 9 dezenas na Mega\nsena da virada, e o que sobrar ainda pode ficar como custos do bolão ou\npodemos resolver outra coisa qualquer"
];


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
      <Grid container direction={"column"} style={{ margin: 0, marginTop: 0 }}>
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
        <div style={{ marginBottom: 32 }}>
          <Typography className="titleMax" textAlign={"center"} color="white" variant="h1" >Bolão do Max </Typography>
          <Typography textAlign={"center"} className="subTitleMax" color="white" variant="h5" >  Resultados em Tempo Real</Typography>
        </div>
        <Grid style={{ position: "relative" }} item>
          <div style={{ position: "absolute", left: 0, top: -194 }}>
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
          <p className="regrasStyle">Regras</p>
          <div className='Row'>
            <BasicCard title={TITLECARDS[0]} index={1} />
            <BasicCard title={TITLECARDS[1]} index={2}/>
            <BasicCard title={TITLECARDS[2]} index={3}/>
          </div>
          <div className='Row'>
          <BasicCard title={TITLECARDS[3]} index={4}/>
          <BasicCard title={TITLECARDS[4]} isFifthCard index={5}/>
        </div>
      <div >
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
