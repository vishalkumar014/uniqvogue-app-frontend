import React from 'react'
import {Box, Typography} from '@mui/material'
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import StarIcon from '@mui/icons-material/Star';

export default function Varations() {
    const themes:any    = useTheme();
    const {singleProductPage}  = themes
    return (
        <Grid container alignItems={"center"}>
            <Grid size={2}>
                <Box>
                    <Typography sx={singleProductPage.sizeVaration}>Size</Typography>
                </Box>
            </Grid>
            <Grid size={8}>
                <Grid container spacing={1}>
                    {
                        ["xs","s","m","l"].map((size,index)=>{
                            return(
                                <Grid size={1.5} sx={singleProductPage.sizeVarationGrid}  key={index}>
                                    <Box>
                                        <Typography sx={singleProductPage.sizeVarationText}>{size}</Typography>
                                    </Box>
                                </Grid> 
                            )
                        })
                    }
                </Grid>
            </Grid>
            <Grid size={12} mt={3}>
                <Grid container alignItems={"center"}>
                    <Grid size={2}>
                        <Box>
                            <Typography sx={singleProductPage.sizeVaration}>Color</Typography>
                        </Box>
                    </Grid>  
                    <Grid size={6}>
                        <Box>
                            <Typography sx={singleProductPage.sizeVaration}>Black</Typography>
                        </Box>
                    </Grid>
                    <Grid size={2}>
                        <Box>
                            <Typography sx={singleProductPage.sizeChartText}>Size chart</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
