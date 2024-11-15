import React from 'react'
import Grid from '@mui/material/Grid2';
import { Typography,Box, Tooltip } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function Logo() {
  const theme = useTheme()
  const {header} = theme
  return (
    <Grid container >
      <Grid size={{xs: 12}}>
        <Tooltip title="Made in India" placement="bottom">
          <Box>
            <Typography sx={header.logo}>UniqVogue</Typography>
          </Box>
        </Tooltip>
      </Grid>
    </Grid>
  )
}
