import React from 'react'
import { Box } from '@mui/material'
import Grid from '@mui/material/Grid2';
import MiddelCover from '../../assets/image/beige_cover.png'

export default function MiddleBanner() {
  return (
    <Grid container mt={2}>
      <Grid size={12}>
        <Box>
          <img width={"100%"} src={MiddelCover}/>
        </Box>
      </Grid>
    </Grid>
  )
}
