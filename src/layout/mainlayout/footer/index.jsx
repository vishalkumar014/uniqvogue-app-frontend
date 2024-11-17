import React from 'react'
import { Box } from '@mui/material'
import Grid from '@mui/material/Grid2';
import FooterMenu from './FooterMenu';
import { useTheme } from '@mui/material/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function index() {
  const themes    = useTheme();
  const {mainFooter}  = themes
  return (
    <Box>
      <Grid container sx={mainFooter.footerContainer}>
        <Grid size={12}>
          <FooterMenu/>
        </Grid>
        <Grid size={8} offset={2}  sx={mainFooter.footerSocial}>
          <Box>
            <Grid container sx={mainFooter.footerSocialContainer}>
              <Grid size={0.6}>
                <InstagramIcon sx={mainFooter.footerSocialIcon} fontSize="large"/>
              </Grid>
              <Grid size={0.6}>
                <FacebookIcon sx={mainFooter.footerSocialIcon} fontSize="large"/>
              </Grid>
              <Grid size={0.6}>
                <TwitterIcon sx={mainFooter.footerSocialIcon} fontSize="large"/>
              </Grid>
              <Grid size={0.6}>
                <LinkedInIcon sx={mainFooter.footerSocialIcon} fontSize="large"/>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
