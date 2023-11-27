import React, { Component } from 'react'
import "./home.css"
import Navbar from './Navbar/navbar'
import { Box, Grid, Typography } from '@mui/material'
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

export default class Home extends Component {
  render() {
    return (
      <div className='backgroundpage'>
        <Navbar />
        <Grid container direction={"column"} style={{ height: "100vh", marginTop: 64}}>
        <Grid item >
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
                <Grid item style={{display: "flex", justifyContent: "center"}}>
                <Typography color="white" variant="h1" className="title">Titulo </Typography>
                <Typography color="white" variant="h3" className="title">Subtitulo </Typography>
                </Grid>
    
          <BasicTable></BasicTable>
        
        <Typography color="white" variant="h4" className="title">Regras </Typography>
    
            <BasicCard></BasicCard>
         
          {/* <BasicCard></BasicCard> */}
         
          {/* <BasicCard></BasicCard> */}
         
          {/* <BasicCard></BasicCard> */}
         
          {/* <BasicCard></BasicCard> */}
       
        </Grid>

        

      </div>
    )
  }
}




function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}





function BasicCard() {
  return (
    <Card >
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