import React from 'react'
import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useTheme } from '@mui/material/styles';

export default function Price() {
    const themes:any    = useTheme();
    const {singleProductPage}  = themes
    return (
        <Box>
            <Grid container alignItems={"center"}>
                <Grid size={2}>
                    <Typography display={"flex"}>
                        <Typography sx={singleProductPage.priceSaleText} component={"span"}>₹</Typography>
                        <Typography sx={singleProductPage.priceSaleText} component={"span"}>2500</Typography>
                    </Typography>
                </Grid>
                <Grid size={4}>
                    <Typography display={"flex"}>
                        <Typography sx={singleProductPage.priceMrpText} component={"span"}>₹</Typography>
                        <Typography sx={singleProductPage.priceMrpText} component={"span"}>800</Typography>
                        <Typography ml={1} sx={singleProductPage.priceDiscount} component={"span"}>80% off</Typography>
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}
