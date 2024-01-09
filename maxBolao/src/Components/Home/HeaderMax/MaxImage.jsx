import { Grid } from '@mui/material'
import React from 'react'

export default function MaxImage() {
  return (
    <>
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
    </>
  )
}
