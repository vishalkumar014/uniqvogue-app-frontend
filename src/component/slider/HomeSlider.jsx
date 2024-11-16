import { Box } from "@mui/material";
import React from "react";
import Slider from "react-slick";

function HomeSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Box className="slider-container">
      <Slider {...settings}>
        <Box sx={{m:1}}>
          <img width={"270px"} src="https://images.bestsellerclothing.in/live/image/catalog/brandstore/bestseller/banners/SKIRTS-415x550_02082024.jpg?width=500&height=562&format=auto"/>
        </Box>
        <Box sx={{m:1}}>
          <img width={"270px"} src="https://images.bestsellerclothing.in/live/image/catalog/brandstore/bestseller/banners/CO-ORDS-415x550_02082024.jpg?width=500&height=562&format=auto"/>
        </Box>
        <Box sx={{m:1}}>
          <img width={"270px"} src="https://images.bestsellerclothing.in/live/image/catalog/brandstore/bestseller/banners/DRESSES-415x550_02082024.jpg?width=500&height=562&format=auto"/>
        </Box>
        <Box sx={{m:1}}>
          <img width={"270px"} src="https://images.bestsellerclothing.in/live/image/catalog/brandstore/bestseller/banners/ol_Denim_Tile_17102024.jpg?width=500&height=562&format=auto"/>
        </Box>
        <Box sx={{m:1}}>
          <img width={"270px"} src="https://images.bestsellerclothing.in/live/image/catalog/brandstore/bestseller/banners/SKIRTS-415x550_02082024.jpg?width=500&height=562&format=auto"/>
        </Box>
        <Box sx={{m:1}}>
          <img width={"270px"} src="https://images.bestsellerclothing.in/live/image/catalog/brandstore/bestseller/banners/TOPs_415x550_02082024.jpg?width=500&height=562&format=auto"/>
        </Box>
        <Box sx={{m:1}}>
          <img width={"270px"} src="https://images.bestsellerclothing.in/live/image/catalog/brandstore/bestseller/banners/SKIRTS-415x550_02082024.jpg?width=500&height=562&format=auto"/>
        </Box>
        <Box sx={{m:1}}>
          <img width={"270px"} src="https://images.bestsellerclothing.in/live/image/catalog/brandstore/bestseller/banners/SKIRTS-415x550_02082024.jpg?width=500&height=562&format=auto"/>
        </Box>
      
      </Slider>
    </Box>
  );
}

export default HomeSlider;