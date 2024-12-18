import React from 'react'
import { Box, Paper} from '@mui/material'
import Grid from '@mui/material/Grid2';

export default function TopBanner() {
  return (
    <Paper>
      <Grid container mt={2}>
        <Grid size={12}>
          <Box>
            <img width={"100%"} src="https://images.bestsellerclothing.in/live/image/catalog/brandstore/bestseller/banners/on_newin_clp_22102024.jpg"/>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  )
}
