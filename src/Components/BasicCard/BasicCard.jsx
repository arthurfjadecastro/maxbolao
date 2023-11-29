import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import React from 'react'

function BasicCard() {
    
    return (
      <Grid container>
        <Grid Item>
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
        </Grid>
      </Grid>
    )
  }


export default BasicCard;

