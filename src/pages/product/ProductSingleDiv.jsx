import React from 'react'
import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2';
import Slider from "react-slick";
import { MdFavoriteBorder } from 'react-icons/md';
import { useTheme } from '@mui/material/styles';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PercentIcon from '@mui/icons-material/Percent';

export default function ProductSingleDiv() {
  const themes    = useTheme();
  const {singleProductDiv}  = themes

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, right:'8px'}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,left:'4px',zIndex:'9'}}
        onClick={onClick}
      />
    );
  }

    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };

  return (
    <Box>
      <Grid container>
        <Grid size={12} position={"relative"}>
            <Box sx={singleProductDiv.wishList}>
              <MdFavoriteBorder style={{fontSize:'24px', color:"grey"}} />
            </Box>
            <Slider {...settings}>
              <Box className="sliderr">
                  <img width={"100%"} src="https://images.bestsellerclothing.in/data/only/01-nov-2024/130542001_g5.jpg?width=380&height=500&mode=fill&fill=blur&format=auto"/>
              </Box>
              <Box className="sliderr">
                  <img width={"100%"} src="https://images.bestsellerclothing.in/data/only/01-nov-2024/130542001_g5.jpg?width=380&height=500&mode=fill&fill=blur&format=auto"/>
              </Box>
              <Box className="sliderr">
                  <img  width={"100%"}src="https://images.bestsellerclothing.in/data/only/01-nov-2024/130542001_g5.jpg?width=380&height=500&mode=fill&fill=blur&format=auto"/>
              </Box>
              <Box>
                  <img  width={"100%"} src="https://images.bestsellerclothing.in/data/only/01-nov-2024/130542001_g5.jpg?width=380&height=500&mode=fill&fill=blur&format=auto"/>
              </Box>
            </Slider>
        </Grid>
        <Grid size={12}>
          <Box>
            <Typography sx={singleProductDiv.title}>
              adv fashionwear Women Bodycon Maroon Dress
            </Typography>
          </Box>
        </Grid>
        <Grid size={12}>
          <Grid container className="price_container">
            <Grid size={3}>
              <Box display={"flex"} alignItems={"center"}>
                <CurrencyRupeeIcon sx={singleProductDiv.rupeesIcon}/> 
                <Typography sx={singleProductDiv.price}>500</Typography>
              </Box>
            </Grid>
            <Grid size={3}>
              <Box display={"flex"} alignItems={"center"}>
                <CurrencyRupeeIcon sx={singleProductDiv.rupeesStrikeIcon}/> 
                <Typography sx={singleProductDiv.strikePrice}><s>800</s></Typography>
              </Box>
            </Grid>
            <Grid size={2}>
              <Box display={"flex"} alignItems={"center"}> 
                <Typography sx={singleProductDiv.offPer}>10</Typography>
                <PercentIcon sx={singleProductDiv.rupeesIcon}/>
                <Typography sx={singleProductDiv.offPer} ml={0.3}>OFF</Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={12}>
          <Grid container textAlign={"center"} className="size_container">
            {
              ['XS','S','M'].map((size,index)=>{
                return(
                  <Grid key={index} size={.6}>
                    <Typography sx={singleProductDiv.size}>{size}</Typography>
                  </Grid>
                )
              })
            }
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

