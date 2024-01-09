import React, { useRef, useState, useEffect } from 'react';
import "./home.css";
import Navbar from './Navbar/navbar';
import {  Grid, Typography } from '@mui/material';
import useResultsFootball from "../../Network/useResultsFootball";
import { BasicCard } from '../BasicCard';
import { BasicTable } from '../BasicTable';
import styled from 'styled-components';


const ROTATE_DOWN = "rotate(3deg)";
const ROTATE_UP = "rotate(-3deg)";
const FrameItemContainer = styled('div')({
  position: 'absolute',
  top: '0',
  left: '5%',
  transform: 'translate(-35%, -10%)',
  marginTop: 96,
  '@media (max-width: 768px)': { 
    left: '0',
    transform: 'translate(-15%, -10%)', 
  },
});

const FrameItem = styled('div')(({ theme, rotate }) => ({
  display: "flex",
  height: "59.929px",
  transform: rotate,
  padding: "12px 24px",
  alignItems: "center",
  gap: 24,
  flexShrink: 0,
  backgroundColor: "#B1FF74",
}));

const SVGfoo = styled('svg')({
  objectFit: 'contain', // Isso ajuda a garantir que o conteúdo do SVG seja coberto completamente
  background: `url('/Images/ellipse.svg') center center no-repeat`,
  backgroundSize: 'contain',
});

const TextTitle = styled(Typography)({
  color: "#2D2D2D !important",
  textAlign: "center !important",
  fontFamily: "Satoshi !important",
  fontSize: "24px !important",
  fontStyle: "normal !important",
  fontWeight: "800 !important",
  lineHeight: "normal !important",
  textWrap: "noWrap !important"
});

const MaxImageContainer = styled('div')({
  position: 'relative',
});

const IlluminationImage = styled('img')({
  position: 'absolute',
  top: 70,
  left: 0,
  width: '500px',
  height: '238px',
  zIndex: -1,  // Ajuste isso conforme necessário para definir a ordem de empilhamento
});

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
  const regrasRef = useRef(null);
  const [elements, setElements] = useState([]);


  let dataRows = [];
  let updateAt = ""
  const frameItemWidth = 150; 
  useEffect(() => {
    const updateElements = () => {
      const screenWidth = window.innerWidth;
      console.log("size", screenWidth)
      const maxElements = Math.floor(screenWidth / frameItemWidth);

      const newElements = [];
      for (let i = 0; i < maxElements; i++) {
        newElements.push(generateSVG(i));
        newElements.push(generateTypography(i + 't'));
      }

      setElements(newElements);
    };

    window.addEventListener('resize', updateElements);
    updateElements();

    return () => {
      window.removeEventListener('resize', updateElements);
    };
  }, [frameItemWidth]);

  function converterFormatoData(dataString) {
    const meses = {
      Jan: 'Janeiro', Feb: 'Fevereiro', Mar: 'Março', Apr: 'Abril', May: 'Maio', Jun: 'Junho',
      Jul: 'Julho', Aug: 'Agosto', Sep: 'Setembro', Oct: 'Outubro', Nov: 'Novembro', Dec: 'Dezembro'
    };

    const regex = /(\d+)\/([a-zA-Z]+)\/(\d+)\s+(\d+:\d+:\d+)/;
    const [, dia, mesAbrev, ano, horaMinSeg] = dataString.match(regex);
    const mes = meses[mesAbrev];

    return `${dia} de ${mes} de ${ano} às ${horaMinSeg}`;
  }

  if (useResults && useResults.data && useResults.data.Competidores) {
    updateAt = converterFormatoData(useResults.data.atualizado_em)
    
    dataRows = useResults.data.Competidores.map((competidor) => {
      return createData(
        "",
        competidor.Nome,
        competidor.Pontos,
        competidor.Saldo_Gols,
        competidor.Premio,
        competidor.Clubes.map((clube) => clube),
      );
    });
  }

  const generateSVG = (key) => (
    <SVGfoo key={key} style={{ width: '16px', height: '16px' }} />
  );
  const currentYear = new Date().getFullYear();

  const generateTypography = (key) => (
    <TextTitle key={key} >
      Brasileirão {currentYear}
    </TextTitle>
  );

  return (
    <>
      <Navbar regrasRef={regrasRef} />
      <div className='backgroundpage'>
          <div style={{ marginBottom: 32 }}>
            <Typography className="titleMax" textAlign={"center"} color="white" variant="h1" >Bolão do Max </Typography>
            <Typography textAlign={"center"} className="subTitleMax" color="white" variant="h5" >  Resultados em Tempo Real</Typography>
            <Typography textAlign={"center"} color="rgba(255,255,255, 0.4)" variant="body2">
              Última atualização: {updateAt}
            </Typography>
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
        <Grid  container >
          <BasicTable rows={dataRows} />
        </Grid>
        <div className="Regras" ref={regrasRef}>
          <p className="regrasStyle">Regras</p>
          <div className='rulesContainer'>
            <BasicCard title={TITLECARDS[0]} index={1} />
            <BasicCard title={TITLECARDS[1]} index={2}/>
            <BasicCard title={TITLECARDS[2]} index={3}/>
            <BasicCard title={TITLECARDS[3]} index={4}/>
            <BasicCard title={TITLECARDS[4]} isFifthCard index={5}/>
          </div>
          <div>
            <FrameItemContainer>
              <FrameItem rotate={ROTATE_DOWN} item>
                {elements.map((element, index) => (
                  <React.Fragment key={index}>{element}</React.Fragment>
                ))}
              </FrameItem>
              <FrameItem rotate={ROTATE_UP} item>
                {elements.map((element, index) => (
                  <React.Fragment key={index}>{element}</React.Fragment>
                ))}
              </FrameItem>
            </FrameItemContainer>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
