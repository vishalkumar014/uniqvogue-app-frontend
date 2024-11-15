import React from 'react'
import { Outlet } from 'react-router-dom';
import {Box,Container} from '@mui/material';
import Header from './header'
import Footer from './footer'

export default function MainLayout() {
  return (
    <Box>
        <Header/>
        <Container className="main" maxWidth={false} component="div">
            <Outlet/>
        </Container>
        <Footer/>
    </Box>
  )
}
