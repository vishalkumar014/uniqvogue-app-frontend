import React from 'react'
import {Box,Paper,Container, Typography,TextField,Button} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useTheme } from '@mui/material/styles';
import {styled, } from '@mui/system';
import useAuth from '../../hooks/useAuth';

const CustomeTextField = styled(TextField)(({}) => ({
    borderRadius:"8px",
    '& input':{
        padding:"14px"
    },
    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#fc2779 !important', // Border color when focused
    },
}));
export default function Login() {
    const themes:any    = useTheme();
    const  {login}:any         = useAuth()
    const {mainLayOut,paperGridContainerPadding,loginPage,defaultBgColor}  = themes
   
    
    const userLoginHadler = () =>{
        login()
    }

    return (
        <Box sx={mainLayOut}>
            <Container maxWidth={"sm"}>
                <Paper>
                    <Grid container sx={paperGridContainerPadding}>
                        <Grid size={12}>
                            <Grid container sx={loginPage.gridContinerSecond}>
                                <Grid size={12} sx={loginPage.gridContinerSecondGridFirst}>
                                    <Typography sx={loginPage.loginSignup} variant='h6'>Login/Signup</Typography>
                                </Grid>
                                <Grid size={12} mt={4}>
                                    <Typography sx={loginPage.label}>Email address</Typography>
                                </Grid>
                                <Grid size={12} mt={1}>
                                    <Box>
                                        <CustomeTextField fullWidth variant="outlined" />
                                    </Box>
                                </Grid>
                                <Grid size={12} mt={2}>
                                    <Typography sx={loginPage.label}>Mobile number</Typography>
                                </Grid>
                                <Grid size={12} mt={1}>
                                    <Box>
                                        <CustomeTextField fullWidth variant="outlined" />
                                    </Box>
                                </Grid>
                                <Grid size={12} mt={2}>
                                    <Typography sx={loginPage.label}>Password</Typography>
                                </Grid>
                                <Grid size={12} mt={1}>
                                    <Box>
                                        <CustomeTextField type='password' fullWidth variant="outlined" />
                                    </Box>
                                </Grid>
                                <Grid size={12} mt={2}>
                                    <Box>
                                        <Button onClick={()=>{userLoginHadler()}} sx={{...defaultBgColor,...loginPage.loginSignupBtn}} fullWidth variant="contained" disableElevation>
                                            login/signup
                                        </Button>
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
