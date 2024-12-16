import React from 'react'
import Grid from '@mui/material/Grid2';
import {Box,Button} from '@mui/material'
import { useTheme } from '@mui/material/styles';

export default function BuyNow() {
    const themes:any    = useTheme();
    const {singleProductPage}  = themes
    return (
        <Grid container textAlign={"center"} mt={1}>
            <Grid size={11.5}>
                <Box>
                    <Button sx={singleProductPage.buyNowBtn} fullWidth variant="contained" disableElevation>BUY NOW</Button>
                </Box>
            </Grid>
        </Grid>
    )
}
