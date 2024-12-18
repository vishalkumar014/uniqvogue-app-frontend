import React from 'react'
import { Box,Paper } from '@mui/material'
import Grid from '@mui/material/Grid2';
import NewArrivals from '../../assets/image/new_arrivals.png'

export default function NewArrivalsBanner() {
  return (
    <Paper sx={{p:"10px"}}>
      <Grid container mt={2}>
        <Grid size={12}>
          <Box>
            <img width={"100%"} src={NewArrivals}/>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  )
}
