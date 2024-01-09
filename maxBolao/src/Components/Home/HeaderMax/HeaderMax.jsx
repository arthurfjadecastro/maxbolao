import { Skeleton, Typography } from '@mui/material'
import React from 'react'

export default function HeaderMax({updateAt,loadingTable}) {
  return (
    <>
        <div style={{ marginBottom: 32 }}>
            <Typography className="titleMax" textAlign={"center"} color="white" variant="h1" >Bolão do Max </Typography>
            <Typography textAlign={"center"} className="subTitleMax" color="white" variant="h5" >  Resultados em Tempo Real</Typography>
            <Typography style={{display: "flex", justifyContent: "center", width: " 100%"}} textAlign={"center"} color="rgba(255,255,255, 0.5)" variant="body2">
                {/* Última atualização: {loadingTable ? <Skeleton style={{background: "white", width: 250}} animation="wave" />  : updateAt} */}
                Última atualização: {updateAt}
            </Typography>
        </div>
    </>
  )
}
