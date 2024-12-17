import React from 'react'
import Grid from '@mui/material/Grid2';
import { Typography,Box, Tooltip } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

export default function Logo() {
  const theme = useTheme()
  const {header} = theme

  const navigate = useNavigate()
  const  toHandler = () =>{
    navigate('/')
  }

  return (
    <Grid container >
      <Grid size={{xs: 12}}>
        <Tooltip title="Made in India" placement="bottom">
          <Box onClick={()=>{toHandler()}}>
            <Typography sx={header.logo}>UniqVogue</Typography>
          </Box>
        </Tooltip>
      </Grid>
    </Grid>
  )
}
