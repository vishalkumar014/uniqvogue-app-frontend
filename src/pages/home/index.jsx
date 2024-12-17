import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2';
import TopBanner from './TopBanner'
import HomeSlider from '../../component/slider/HomeSlider';
import Products from '../product/Products';
import { useTheme } from '@mui/material/styles';
import MiddleBanner from './MiddleBanner';
import NewArrivalsBanner from './NewArrivalsBanner'

export default function index() {
  const themes    = useTheme();
  const {productSideBar}  = themes

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
          <NewArrivalsBanner/>
        </Grid>
        <Grid size={11.8}>
          <Products/>
        </Grid>
        <Grid size={12}>
          <MiddleBanner/>
        </Grid>
      </Grid>
    </Box>
  )
}
