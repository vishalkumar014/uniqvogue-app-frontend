import React from 'react'
import {Box,Paper,Container, Typography,TextField,Button,Tabs,Tab} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useTheme } from '@mui/material/styles';
import {styled, } from '@mui/system';
import useAuth from '../../hooks/useAuth';
import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';


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


export default function Main() {
    const themes:any    = useTheme();
    const  {login}:any         = useAuth()
    const {mainLayOut,paperGridContainerPadding,loginPage,defaultBgColor}  = themes
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={mainLayOut}>
            <Container maxWidth={"sm"}>
                <Paper>
                    <Grid container sx={paperGridContainerPadding}>
                        <Grid size={12} sx={loginPage.paperGridContainerGrid}>
                            <Box>
                                <Tabs value={value} onChange={handleChange}>
                                    <CustomTab label="Signin" {...a11yProps(0)} />
                                    <CustomTab label="Signup" {...a11yProps(1)} />
                                    <CustomTab label="Forgot password" {...a11yProps(2)} />
                                </Tabs>
                            </Box>  
                        </Grid>
                        <Grid size={12}>
                            <Box>
                                <TabPanel value={value} index={0}>
                                    <Login/>
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    <Register/>
                                </TabPanel> 
                                <TabPanel value={value} index={2}>
                                    <ForgotPassword/>
                                </TabPanel>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </Box>
        
    )
}
