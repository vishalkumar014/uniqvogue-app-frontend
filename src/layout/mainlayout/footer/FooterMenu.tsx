import React from 'react'
import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const footerMenu = [
    {
        id:1,
        title:"ABOUT",
        menus:[
            {
                id:1,
                name:"About us",
                to:"/about-us"
            },
            {
                id:2,
                name:"Contact us",
                to:"/contact-us"
            },
            {
                id:3,
                name:"Careers",
                to:"/careers"
            },
            {
                id:4,
                name:"Stories",
                to:"/stories"
            }
        ]
    },
    {
        id:2,
        title:"HELP",
        menus:[
            {
                id:1,
                name:"Payments",
                to:"/payments"
            },
            {
                id:2,
                name:"Shipping",
                to:"/shipping"
            },
            {
                id:3,
                name:"faq",
                to:"/faq"
            },
            {
                id:4,
                name:"Cancellation & Returns",
                to:"/cancellation-returns"
            },
        ]
    },
    {
        id:3,
        title:"CONSUMER POLICY",
        menus:[
            {
                id:1,
                name:"Cancellation & Returns",
                to:"/cancellation-returns"
            },
            {
                id:2,
                name:"Terms Of Use",
                to:"/terms-use"
            },
            {
                id:3,
                name:"Privacy",
                to:"/privacy"
            },
            {
                id:4,
                name:"Sitemap",
                to:"/sitemap"
            },
        ]
    },
    {
        id:4,
        title:"OTHER",
        menus:[
            {
                id:1,
                name:"Track order",
                to:"/tarck-order"
            },
            {
                id:2,
                name:"Offers",
                to:"/offers"
            },
            {
                id:3,
                name:"coupons",
                to:"/coupons"
            },
        ]
    }
]

export default function FooterMenu() {
    const themes    = useTheme();
    const {mainFooter}:any  = themes
    const navigate = useNavigate()
    
    const goToPageHandler  = (to) =>{
        navigate(to)
    }

    return (
        <Box padding={"0px 50px"}>
            <Grid container>
                {
                    footerMenu.map((item,index)=>{
                        return(
                            <Grid size={3} key={index}>
                                <Box>
                                    <Typography sx={mainFooter.footerMenuTitle}>{item.title}</Typography>
                                </Box>
                                <Grid container p={"10px 0px"}>
                                    {
                                        item.menus.map((menu,index)=>{
                                            return(
                                                <Grid key={index} size={12}>
                                                    <Typography onClick={()=>{goToPageHandler(menu.to)}} sx={mainFooter.footerTitle} >
                                                        {menu.name}
                                                    </Typography>
                                                </Grid>
                                            )
                                        })
                                    }
                                </Grid>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Box>
    )
}
