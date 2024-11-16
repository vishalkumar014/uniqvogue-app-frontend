import React from 'react'
import { Box } from '@mui/material'
import Grid from '@mui/material/Grid2';
import Slider from "react-slick";

export default function ProductSingleDiv() {

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
        <Grid size={12}>
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

        </Grid>
        <Grid size={12}>

        </Grid>
      </Grid>
    </Box>
  )
}

