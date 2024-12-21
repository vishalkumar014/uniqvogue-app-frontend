import React from 'react'
import Grid from '@mui/material/Grid2';
import { Box,Container,Paper,Tabs,Tab,TextField,Button,Typography} from '@mui/material'
import { useTheme } from '@mui/material/styles';
import { styled, } from '@mui/system';

const CustomTab = styled(Tab)(({}) => ({
    borderRadius:"8px",
    '&.MuiTab-textColorPrimary': {
      color: '#000',
      textTransform:"capitalize"
    },
    '&.Mui-selected':{
      color:"#fc2779"
    }
}));


const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
        {children}
        </Box>
      )}
    </Box>
  );
}

const a11yProps = (index) => {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function TrackOrder() {
    const themes:any    = useTheme();
    const {mainLayOut,trackOrder,defaultBgColor}  = themes
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
      <Box sx={mainLayOut}>
        <Container maxWidth={"md"}>
          <Paper>
            <Grid container sx={trackOrder.paperGridContainer}>
                <Grid size={12} sx={trackOrder.paperGridContainerGrid} >
                  <Box>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                      <CustomTab label="AWB Number" {...a11yProps(0)} />
                      <CustomTab label="Order Id" {...a11yProps(1)} />
                    </Tabs>
                  </Box>
                </Grid>
                <Grid size={12}>
                  <Grid container sx={trackOrder.gridSecondContainer}>
                    <Grid size={12} sx={trackOrder.gridSecondContainerGrid}>
                      <Box>
                        <TabPanel value={value} index={0}>
                          <Box>
                            <Grid container>
                              <Grid size={12}>
                                <Typography textAlign={"left"}>Please enter your AWB Number here</Typography>
                              </Grid>
                              <Grid size={12} mt={2}>
                                <TextField placeholder='AWB Number' fullWidth id="outlined-basic"  variant="outlined" />
                              </Grid>
                              <Grid size={12} mt={2} >
                                <Typography textAlign={"left"}>Enter the code sent on your registered Email / Mobile Number in the shipment confirmation email</Typography>
                              </Grid>
                              <Grid size={12} mt={2}>
                                <Button sx={{...defaultBgColor,...trackOrder.trackOrderBtn}} fullWidth variant="contained" disableElevation>Track Order</Button>
                              </Grid>
                            </Grid>
                          </Box>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                          <Box>
                            <Grid container>
                              <Grid size={12}>
                                <Typography textAlign={"left"}>Please enter your Order Id Number here</Typography>
                              </Grid>
                              <Grid size={12} mt={2}>
                                <TextField placeholder='Order Id' fullWidth id="outlined-basic"  variant="outlined" />
                              </Grid>
                              <Grid size={12} mt={2} >
                                <Typography textAlign={"left"}>Enter the code sent on your registered Email / Mobile Number in the shipment confirmation email</Typography>
                              </Grid>
                              <Grid size={12} mt={2}>
                                <Button sx={{...defaultBgColor,...trackOrder.trackOrderBtn}} fullWidth variant="contained" disableElevation>Track Order</Button>
                              </Grid>
                            </Grid>
                          </Box>
                        </TabPanel>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>
    )
}
