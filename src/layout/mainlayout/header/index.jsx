import * as React from 'react';
import PropTypes from 'prop-types';
import {useScrollTrigger,CssBaseline,Toolbar,AppBar} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Logo from '../../../component/Logo';
import Menu from '../../../component/menu/Menu';

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
  const {header}  = themes

  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <>
          <CssBaseline />
          <AppBar sx={header.appbar} component="header">
              <Grid container>
                <Grid size={{xs:12,md:1}}>
                  <Logo/>
                </Grid>
                <Grid sx={{display:{xs:"none",md:"block"}}} size={{xs:2}}>
                  <Menu/>
                </Grid>
              </Grid> 
          </AppBar>
        </>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}
