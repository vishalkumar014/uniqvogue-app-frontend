import React, { useEffect, useState } from 'react'
import { Container,Box, Typography} from '@mui/material'
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import productData_ from '../../productJson';

export default function SingleProductPage() {
    const themes    = useTheme();
    const {singleProductPage}  = themes
    const [productData,setProductData] = useState<any>(false)
    const [mainImage,setMainImage] = useState<any>('')
    const [selectedImage,setSelectedImage] = useState<any>(0)

    useEffect(()=>{
        console.log(productData_.images[0],'productData_');
        setProductData(productData_)
        setMainImage(productData_.images[0])
    },[])

    const productMainImageChangeHandler = (index,src) =>{
        setMainImage(src)
        setSelectedImage(index)
    }
    
    return (
        <>
            {
                productData &&
                <Box sx={singleProductPage.mainBox}>
                    <Container maxWidth={'lg'} sx={singleProductPage.containerBg}>
                        <Grid container>
                            <Grid size={6}>
                                <Box>
                                    <Grid container>
                                        <Grid size={1.6}>
                                            <Grid container>
                                                { 
                                                    productData.images.map((src,index)=>{
                                                        return (
                                                            <Grid size={12} key={index}>
                                                                <Box sx={selectedImage===index?singleProductPage.thumbnail:""}>
                                                                    <img style={{margin:"10px"}} onMouseEnter={(e)=>productMainImageChangeHandler(index,src)} height={70} width={55} src={src}/>
                                                                </Box>
                                                            </Grid>
                                                        )
                                                    })
                                                }
                                            </Grid>
                                        </Grid>
                                        <Grid size={10} pl={3}>
                                            <Box>
                                                <img width={450} height={560} src={mainImage}/>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                            <Grid size={6}>
                                <Box>
                                    <Grid container>
                                        <Grid size={12}>
                                            <Typography sx={singleProductPage.brandTopTitle}>{productData.brand}</Typography>
                                        </Grid>
                                        <Grid size={12}>
                                            <Typography sx={singleProductPage.productTitle}>{productData.title}</Typography>
                                            <Typography sx={singleProductPage.specialPrice}>Special price</Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>  
                    </Container>
                </Box>
            }
        </>
    )
}
