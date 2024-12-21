import React from 'react'
import {Box} from '@mui/material';
import Grid from '@mui/material/Grid2';
import SideBar from './SideBar';
import Products from '../product/Products';
import { useTheme } from '@mui/material/styles';

export default function Category() {
    const themes:any    = useTheme();
    const {mainLayOut}  = themes
    return (
        <Grid container sx={mainLayOut}>
            <Grid size={3}>
                <SideBar/>
            </Grid>
            <Grid size={9}>
                <Box mb={1}>
                    <Products/>
                </Box>
                <Box mb={1}>
                    <Products/>
                </Box>
                <Box mb={1}>
                    <Products/>
                </Box>
            </Grid>
        </Grid>
    )
}
