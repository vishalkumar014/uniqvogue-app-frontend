import React from 'react'
import {Box} from '@mui/material';
import Grid from '@mui/material/Grid2';
import SideBar from './SideBar';
import Products from '../product/Products';


export default function Category() {
    return (
        <Grid container mt={"40px"} mb={"40px"}>
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
            </Grid>
        </Grid>
    )
}
