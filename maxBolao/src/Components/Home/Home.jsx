import React, { useRef, useState, useEffect } from "react";
import { Button, Grid } from "@mui/material";
import useResultsFootball from "../../Network/useResultsFootball";
import { BasicTable } from "../BasicTable";
import styled from "styled-components";
import { HeaderMax, MaxImage } from "./HeaderMax";
import { Rules } from "./Rules";
import { Facade } from "./FrontAge";
import { toast } from "react-toastify";
import Navbar from "./Navbar/navbar";
import "./home.css";

function Home() {
  //Realizar fetch na rota https://bolao.maxmat1.com.br/resultados
  const [useResults, error] = useResultsFootball();
  const [loadingTable, setLoadingTable] = useState(true);
  //Configurar rotação das faixas
  const rotates = ["rotate(3deg)", "rotate(-3deg)"];
  // Referência para dar Scrolling
  const rulesRef = useRef(null);
  // Lista de Competidores
  let players = [];
  // Última atualização
  let updateAt = "";
  // Estilos globais para o toast
  const customToastStyle = {
    ".Toastify__toast--error": {
      background: "#6a6a6a  ",
      color: "white",
    },
  };

  Object.entries(customToastStyle).forEach(([selector, styles]) => {
    const rule =
      selector +
      " {" +
      Object.entries(styles)
        .map(([property, value]) => `${property}: ${value};`)
        .join(" ") +
      "}";
    const style = document.createElement("style");
    style.type = "text/css";
    style.appendChild(document.createTextNode(rule));
    document.head.appendChild(style);
  });

  const notify = () => {
    toast.error("Ocorreu um erro no carregamento dos dados. Por favor, tente novamente mais tarde!");
  };

  if (error) {
    notify();
  }

  useEffect(() => {
    if (useResults && useResults.data && useResults.data.Competidores) {
      setLoadingTable(false);
    }
  }, [useResults]);

  // Simular erro
  const simulateError = () => {
    notify();
  };

  // Container para análise de layout futura no modo responsivo quando em ambiente de homologação
  const FrameItemContainer = styled("div")({
    position: "absolute",
    top: "0",
    left: "5%",
    transform: "translate(-35%, -10%)",
    marginTop: 96,
    "@media (max-width: 768px)": {
      left: "0",
      transform: "translate(-15%, -10%)",
    },
  });

  //Pattern
  function createData(pos, name, pontos, sg, premio, clubes) {
    return {
      pos,
      name,
      pontos,
      sg,
      premio,
      GP1: clubes[0],
      GP2: clubes[1],
      GP3: clubes[2],
      GP4: clubes[3],
    };
  }

  //Método para formatar a última atualização
  function EqualDesignDateFormat(dataString) {
    const meses = {
      Jan: "Janeiro",
      Feb: "Fevereiro",
      Mar: "Março",
      Apr: "Abril",
      May: "Maio",
      Jun: "Junho",
      Jul: "Julho",
      Aug: "Agosto",
      Sep: "Setembro",
      Oct: "Outubro",
      Nov: "Novembro",
      Dec: "Dezembro",
    };

    const regex = /(\d+)\/([a-zA-Z]+)\/(\d+)\s+(\d+:\d+:\d+)/;
    const [, day, mesAbrev, year, hrs] = dataString.match(regex);
    console.log("regex", dataString.match(regex));
    const mes = meses[mesAbrev];

    return `${day} de ${mes} de ${year} às ${hrs}`;
  }

  // Popular
  if (useResults && useResults.data && useResults.data.Competidores) {
    updateAt = EqualDesignDateFormat(useResults.data.atualizado_em);
    players = useResults.data.Competidores.map((competidor) => {
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

  return (
    <>
      <div className="backgroundPage">
        {/* 1 - Navbar */}
        <Navbar regrasRef={rulesRef} />
        {/* Comentar linha para produção */}
        <Button onClick={simulateError}>Simulate Error</Button>

        {/* 2 -  Fachada Brasileirão */}
        <FrameItemContainer>
          <Facade rotates={rotates} />
        </FrameItemContainer>

        {/* 3 -  Imagem com Título e subtítulo*/}
        <HeaderMax loadingTable={loadingTable} updateAt={updateAt} />
        <MaxImage />

        {/* 4 -  Tabela */}
        <Grid container>
          <BasicTable loadingTable={loadingTable} rows={players} />
        </Grid>

        {/* 5 -  Regras*/}
        <div className="Rules" ref={rulesRef}>
          <Rules />
        </div>
      </div>
    </>
  );
}

export default Home;
