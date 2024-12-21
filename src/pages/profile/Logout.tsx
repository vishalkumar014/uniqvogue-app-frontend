import React from 'react'
import { Box,Container,Button, Typography} from '@mui/material'
import Grid from '@mui/material/Grid2';
import { useTheme } from '@mui/material/styles';
import useAuth from '../../hooks/useAuth';
import { useNavigate  } from 'react-router-dom';

export default function Logout() {
    const navigate = useNavigate()
    const themes:any    = useTheme();
    const {defaultBgColor,profile}  = themes
    const  {logout}:any         = useAuth()

    const userLogoutHandler  = () =>{
        logout()
    }

    const userNotLogoutHandler  = () =>{
        navigate('/')
    }

    return (
        <Box>
            <Container maxWidth={"xs"}>
                <Grid container textAlign={"center"}>
                    <Grid size={12} mt={4}>
                        <Typography>Are you sure want to logout</Typography>
                    </Grid>
                    <Grid size={12} mt={4}>
                        <Grid container textAlign={"center"} spacing={2}>
                            <Grid size={6}>
                                <Button  onClick={()=>{userNotLogoutHandler()}} sx={defaultBgColor} fullWidth variant="contained" disableElevation>
                                    No
                                </Button>
                            </Grid>
                            <Grid size={6}>
                                <Button onClick={()=>{userLogoutHandler()}} sx={defaultBgColor}  fullWidth variant="contained" disableElevation>
                                    Yes
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
