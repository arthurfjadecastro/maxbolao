import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import React from 'react'

function BasicCard() {
    
    return (
      <div className="Container">
        <div className="Step">
          <div className="tipografiaIcon"></div>
        </div>
        <div className="Tipografia">
          <p className="textCard">
              A aposta esse ano custa R$ 120,00 e deve ser paga antes de acabar o campeonato
          </p>
        </div>
      </div>
    )
  }


export default BasicCard;

