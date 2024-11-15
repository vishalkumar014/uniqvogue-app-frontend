import React from 'react'
import Grid from '@mui/material/Grid2';
import { Typography,Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const headerMenu = [
    {
        id:0,
        name:"Women",
        to:"/women"
    },
    {
        id:1,
        name:"Men",
        to:"/men"
    }
] 

export default function Menu() {
    const theme = useTheme()
    const {header} = theme 
    return (
        <Box>
            <Grid container sx={header.headerMenu}>
                {
                    headerMenu.map((menu,index)=>{
                        return(
                            <Grid key={index} size={4}>
                                <Typography component={"span"}>
                                    {menu.name}
                                </Typography>
                            </Grid>
                        )
                    })
                }
                
            </Grid>
        </Box>
    )
}
