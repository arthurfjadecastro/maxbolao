import React from 'react';
import { AppBar, Button,  Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar({regrasRef}) {

  // Método para rolar suavemente para a div "Regras"
  const scrollToRegras = () => {
    regrasRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start', // ou 'end' se quiser que o final da div esteja visível
    });
  };

  return (
    <>
    <AppBar position="absolute" style={{ background: "#121F18"}}>
        <Toolbar style={{ minHeight: "65px !important" }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: "flex" }}>
                <Link style={{display: "flex"}} to="/">
                <img src="/Images/logo.png" alt="Slide 1" style={{ width: "128px" }} />
                </Link>
            </Typography>
            <Button onClick={scrollToRegras} size="small" variant="outlined" style={{ cursor: "pointer" }} color="inherit">
              Regras
            </Button>
        </Toolbar>
    </AppBar>
    </>
  )
}

export default Navbar;




