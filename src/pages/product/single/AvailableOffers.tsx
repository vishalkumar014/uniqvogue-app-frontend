import React from 'react'
import Grid from '@mui/material/Grid2';
import {Box, Typography} from '@mui/material'
import { useTheme } from '@mui/material/styles';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

export default function AvailableOffers() {
  const themes:any    = useTheme();
  const {singleProductPage}  = themes
  return (
    <Grid container>
      <Grid size={12}>
        <Box>
          <Typography>
            Available offers
          </Typography>
        </Box>
      </Grid>
      <Grid size={12} mt={1}>
        <Box>
          <Grid container>
            <Grid size={.6}>
              <LocalOfferIcon sx={singleProductPage.offerBadge}/>
            </Grid>
            <Grid size={11}>
              <Typography component={"span"}>
                Shop for Rs.6999 get 10% OFF* Code:OVII10
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container>
            <Grid size={.6}>
              <LocalOfferIcon sx={singleProductPage.offerBadge}/>
            </Grid>
            <Grid size={11}>
              <Typography component={"span"}>
                On First Purchase Of Rs.1699 or More Code:ONNEW300
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container>
            <Grid size={.6}>
              <LocalOfferIcon sx={singleProductPage.offerBadge}/>
            </Grid>
            <Grid size={11}>
              <Typography component={"span"}>
                Shop for Rs.6999 get 10% OFF* Code:OVII10
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container>
            <Grid size={.6}>
              <LocalOfferIcon sx={singleProductPage.offerBadge}/>
            </Grid>
            <Grid size={11}>
              <Typography component={"span"}>
                Addl. 10% OFF* on Kotak Bank Credit Cards.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  )
}
