import React from 'react'
import Grid from '@mui/material/Grid2';
import {Box,Button} from '@mui/material'
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

export default function BuyNow() {
    const navigate = useNavigate()
    const themes:any    = useTheme();
    const {singleProductPage}  = themes

    const goToCheckout = () => {
        navigate('/account/checkout')
    }

    return (
        <Grid container textAlign={"center"} mt={1}>
            <Grid size={11.5}>
                <Box>
                    <Button onClick={()=>{goToCheckout()}} sx={singleProductPage.buyNowBtn} fullWidth variant="contained" disableElevation>BUY NOW</Button>
                </Box>
            </Grid>
        </Grid>
    )
}
