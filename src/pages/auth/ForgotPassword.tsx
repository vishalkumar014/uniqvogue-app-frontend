import React from 'react'
import {Box,Typography,TextField,Button} from '@mui/material';
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

export default function ForgotPassword() {
    const themes:any    = useTheme();
    const  {login}:any         = useAuth()
    const {loginPage,defaultBgColor}  = themes
 
    const userForgetPasswordHandler = () =>{
        
    }

    return (
        <Grid container >
            <Grid size={12}>
                <Grid container sx={loginPage.gridContinerSecond}>
                    <Grid size={12} mt={4}>
                        <Typography sx={loginPage.label}>Email address</Typography>
                    </Grid>
                    <Grid size={12} mt={1}>
                        <Box>
                            <CustomeTextField placeholder='Email' fullWidth variant="outlined" />
                        </Box>
                    </Grid>
                    <Grid size={12} mt={2}>
                        <Box>
                            <Button onClick={()=>{userForgetPasswordHandler()}} sx={{...defaultBgColor,...loginPage.loginSignupBtn}} fullWidth variant="contained" disableElevation>
                                Continue
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    )
}
    