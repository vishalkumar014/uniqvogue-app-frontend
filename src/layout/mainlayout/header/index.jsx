import * as React from 'react';
import PropTypes from 'prop-types';
import {useScrollTrigger,CssBaseline,Toolbar,AppBar, Typography} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Logo from '../../../component/Logo';
import Menu from '../../../component/menu/Menu';
import SearchAppBar from '../../../component/SearchBar';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import {MdOutlineShoppingBag,MdDirectionsCar } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return children
    ? React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
      })
    : null;
}

ElevationScroll.propTypes = {
  children: PropTypes.element,
  window: PropTypes.func,
};

export default function ElevateAppBar(props) {
  const themes    = useTheme();
  const {header,cursorPointer}  = themes
  const navigate = useNavigate()
  const navChangeHandler = (to) => {
    navigate(to)
  }
  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <>
          <CssBaseline />
          <AppBar sx={header.appbar} component="header">
              <Grid container alignItems={"center"}>
                <Grid size={{xs:12,md:1}}>
                  <Logo/>
                </Grid>
                <Grid sx={{display:{xs:"none",md:"block"}}}  size={{xs:8}}>
                  <Grid container alignItems={"center"} justifyContent={"end"}>
                    <Grid sx={{display:{xs:"none",md:"block"}}} size={{xs:5}}>
                      <Menu/>
                    </Grid>
                    <Grid sx={{display:{xs:"none",md:"block"}}} size={{xs:7}}>
                      <SearchAppBar/>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid sx={{display:{xs:"none",md:"block"}}}  size={{xs:3}}>
                  <Grid container alignItems={"center"} textAlign={"center"} justifyContent={"end"}>
                    <Grid  sx={cursorPointer} size={3} onClick={()=>{navChangeHandler('/account')}}>
                      <PermIdentityIcon/>
                      <Typography sx={header.icon}>Profile</Typography>
                    </Grid>
                    <Grid sx={cursorPointer} size={3} onClick={()=>{navChangeHandler('/account/order-track')}}>
                      <MdDirectionsCar style={{fontSize: '24px' }} />
                      <Typography sx={header.icon}>Track order</Typography>
                    </Grid>
                    <Grid sx={cursorPointer} size={3} onClick={()=>{navChangeHandler('/account/checkout')}}>
                      <MdOutlineShoppingBag style={{fontSize: '24px' }} />
                      <Typography sx={header.icon}>Bag</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid> 
          </AppBar>
        </>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}
