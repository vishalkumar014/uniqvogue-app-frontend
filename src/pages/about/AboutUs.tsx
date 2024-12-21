import React from 'react'
import { Box, Typography,Container,Paper} from '@mui/material'
import Grid from '@mui/material/Grid2';
import { useTheme } from '@mui/material/styles';

export default function AboutUs() {
    const theme:any = useTheme()
    const {mainLayOut} = theme
    return (
        <Box sx={mainLayOut}>
            <Container maxWidth={"sm"}>
                <Paper>
                    <Grid container>
                        <Grid size={6}>

                        </Grid>
                        <Grid size={6}>
                            
                        </Grid>
                    </Grid>   
                </Paper>
            </Container>
        </Box>
    )
}
