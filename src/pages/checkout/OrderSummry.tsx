import React from 'react'
import Grid from '@mui/material/Grid2';
import {Typography,Box,Paper} from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function OrderSummry() {
    const theme:any = useTheme()
    const {checkOutPage} = theme
    return (
        <Box>
            <Paper>
                <Grid container>
                    <Grid size={12} sx={checkOutPage.orderSummryContainerGridOne}>
                        <Typography sx={checkOutPage.orderSummryTypography}>Price details</Typography>
                    </Grid>
                    <Grid size={12} sx={checkOutPage.orderSummryContainerGridSecond}>
                        <Grid container>
                            <Grid size={12} mb={3}>
                                <Grid container>
                                    <Grid size={6}>
                                        <Typography>Price (1 item)</Typography>
                                    </Grid>
                                    <Grid size={6} sx={checkOutPage.orderSummryContainerGridSeCondcontainerGrid}>
                                        <Typography>₹498</Typography>
                                    </Grid>
                                </Grid>                     
                            </Grid>
                            <Grid size={12} mb={3}>
                                <Grid container>
                                    <Grid size={6}>
                                        <Typography>Delivery Charges</Typography>
                                    </Grid>
                                    <Grid size={6} sx={checkOutPage.orderSummryContainerGridSeCondcontainerGrid}>
                                        <Typography>Free</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid size={12} mb={3}>
                                <Grid container>
                                    <Grid size={6}>
                                        <Typography>Platform Fee</Typography>
                                    </Grid>
                                    <Grid size={6} sx={checkOutPage.orderSummryContainerGridSeCondcontainerGrid}>
                                        <Typography>₹0</Typography>
                                    </Grid>
                                </Grid>
                                
                            </Grid>
                            <Grid size={12} mb={3} sx={checkOutPage.orderSummryPaybalGrid}>
                                <Grid container>
                                    <Grid size={6}>
                                        <Typography sx={checkOutPage.orderSummryPaybalText}>Total Payable</Typography>
                                    </Grid>
                                    <Grid size={6} sx={checkOutPage.orderSummryContainerGridSeCondcontainerGrid}>
                                        <Typography sx={checkOutPage.orderSummryPaybalText}>₹498</Typography>
                                    </Grid>
                                </Grid>
                                
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    )
}
