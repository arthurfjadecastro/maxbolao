import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const SVGfoo = styled("svg")({
  objectFit: "contain", // Isso ajuda a garantir que o conteúdo do SVG seja coberto completamente
  background: `url('/Images/ellipse.svg') center center no-repeat`,
  backgroundSize: "contain",
});

const TextTitle = styled(Typography)({
  color: "#2D2D2D !important",
  textAlign: "center !important",
  fontFamily: "Satoshi !important",
  fontSize: "24px !important",
  fontStyle: "normal !important",
  fontWeight: "800 !important",
  lineHeight: "normal !important",
  textWrap: "noWrap !important",
});

const FrameItem = styled("div")(({ theme, rotate }) => ({
  display: "flex",
  height: "59.929px",
  transform: rotate,
  padding: "12px 24px",
  alignItems: "center",
  gap: 24,
  flexShrink: 0,
  backgroundColor: "#B1FF74",
}));

export default function Facade({ rotates }) {
  const [elements, setElements] = useState([]);
  const frameItemWidth = 150;
  useEffect(() => {
    const updateElements = () => {
      const screenWidth = window.innerWidth;
      const maxElements = Math.floor(screenWidth / frameItemWidth);

      const newElements = [];
      for (let i = 0; i < maxElements; i++) {
        newElements.push(generateSVG(i));
        newElements.push(generateTypography(i + "t"));
      }

      setElements(newElements);
    };

    window.addEventListener("resize", updateElements);
    updateElements();

    return () => {
      window.removeEventListener("resize", updateElements);
    };
  }, [frameItemWidth]);

  const generateSVG = (key) => (
    <SVGfoo key={key} style={{ width: "16px", height: "16px" }} />
  );
  const currentYear = new Date().getFullYear();

  const generateTypography = (key) => (
    <TextTitle key={key}>Brasileirão {currentYear}</TextTitle>
  );

  return (
    <>
      <FrameItem rotate={rotates[0]} item>
        {elements.map((element, index) => (
          <React.Fragment key={index}>{element}</React.Fragment>
        ))}
      </FrameItem>
      <FrameItem rotate={rotates[1]} item>
        {elements.map((element, index) => (
          <React.Fragment key={index}>{element}</React.Fragment>
        ))}
      </FrameItem>
    </>
  );
}
