import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from '@mui/material'
import Grid from '@mui/material/Grid2';
import TopBanner from './TopBanner'
import HomeSlider from '../../component/slider/HomeSlider';
import SideBar from '../product/SideBar';
import Products from '../product/Products';

export default function index() {
  return (
    <Box>
      <Grid container justifyContent={"center"}>
        <Grid size={12}>
          <TopBanner/>
        </Grid>
        <Grid size={11.8}>
          <HomeSlider/>
        </Grid>
        <Grid size={12}>
          <Grid container>
            <Grid size={2.2}>
              <SideBar/>
            </Grid>
            <Grid size={9.8}>
              <Products/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}
