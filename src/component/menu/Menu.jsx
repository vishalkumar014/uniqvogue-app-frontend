import React from 'react'
import Grid from '@mui/material/Grid2';
import { Typography,Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const headerMenu = [
    {
        id:0,
        name:"Women",
        to:"/product/cid/women"
    },
    {
        id:1,
        name:"Men",
        to:"/product/cid/men"
    },
    {
        id:3,
        name:"New",
        to:"/product/cid/new"
    },
] 

export default function Menu() {
    const theme = useTheme()
    const {header} = theme 
    const navigate = useNavigate()

    const  toHandler = (to) =>{
        navigate(to)
    }
    return (
        <Box>
            <Grid container sx={header.headerMenu}>
                {
                    headerMenu.map((menu,index)=>{
                        return(
                            <Grid key={index} size={3}>
                                <Typography component={"span"} onClick={()=>{toHandler(menu.to)}}>
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
