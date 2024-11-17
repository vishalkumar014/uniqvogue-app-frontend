import React from 'react'
import { Box } from '@mui/material'
import Grid from '@mui/material/Grid2';
import ProductSingleDiv from './ProductSingleDiv';


export default function Products() {
  return (
    <Box>
      <Grid container spacing={2}>
        {
          [1,2,3,4].map((product,index)=>{
            return(
              <Grid key={index} size={3} >
                <ProductSingleDiv/>
              </Grid>
            )
          })
        }
        
      </Grid>
    </Box>
  )
}
