import { createTheme } from '@mui/material/styles';
let CustomTheme = createTheme()
let theme = CustomTheme

CustomTheme = createTheme({
    header:{
        appbar:{
            backgroundColor:"#fff",
            p:"20px 80px",
            color:"#000"
        },
        logo:{
            fontSize:"20px",
            textAlign:"center",
            cursor:"pointer",
            color: "#fc2779",
            fontWeight: 700,
        },
        headerMenu:{
            justifyContent:"end",
            cursor:"pointer"
        },
        icon:{
            fontSize: '14px',
            fontWeight: 600,
        }
    },
    singleProductDiv:{
        wishList:{
            position:'absolute',
            zIndex:'9',
            padding:'10px',
            right:'0px',
            cursor:"pointer",
        },
        title:{
            whiteSpace:'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            width: '100%',
            display: 'block',
        },
        price:{
            color:"#e97a1e",
            fontWeight:"700"
        },
        rupeesIcon:{
            fontSize:"17px",
            color:"#e97a1e",
        },
        strikePrice:{
            color:"grey"
        },
        rupeesStrikeIcon:{
            fontSize:"17px",
            color:"grey"
        },
        offPer:{
            color:"#e97a1e",
            fontWeight:"700"
        },
        size:{
            fontSize: '11px',
            fontWeight: '600',
            color: 'grey',
        },
        firstBox:{
            padding:'10px',
            backgroundColor:'#fff',
            cursor:"pointer"
        }
    },
    productSideBar:{
        container:{
            paddingRight:'20px'
        }
    },
    mainFooter:{
        footerContainer:{
            padding:"80px 60px",
            backgroundColor:"#171e30"
        },
        footerMenuTitle:{
            fontSize: '16px',
            fontWeight: '500',
            color:'#fff',
            textDecoration:"underline"
        },
        footerTitle:{
            fontSize: '14px',
            fontWeight: '400',
            color:'#fff',
            p:"1px 0px",
            '&:hover':{
                textDecoration:"underline"
            },
            cursor:"pointer"
        },
        footerSocial:{
            borderTop:"2px solid #fff",
            mt:"40px"
        },
        footerSocialIcon:{
            color:"#fff"
        },
        footerSocialContainer:{
            mt:"40px",
            justifyContent:"center"
        }

    },
    singleProductPage:{
        mainBox:{
            backgroundColor:"#f1f3f6",
            paddingBottom:"20px",
        },
        containerBg:{
            backgroundColor:"#fff",
            padding:"10px 0px",
            paddingTop:"50px",
        },
        thumbnail:{
            border:'2px solid #fc2779',
        },
        brandTopTitle:{
            color: '#878787',
            fontSize:'16px',
            fontWeight: 500,
            textTransform:'uppercase',
        },
        productTitle:{
            fontSize:'18px',
        },
        specialPrice:{
            color:"#26a541",
            fontSize:'14px',
        },
        priceSaleText:{
            fontSize:"25px",
            fontWeight:600
        },
        priceMrpText:{
            fontSize:"17px",
            textDecoration:"line-through",
            color:"#878787"
        },
        priceDiscount:{
            fontSize:"17px",
            color:"#388e3c"
        },
        overAllRating:{
            backgroundColor:"#26a541",
            fontWeight: 600,
        },
        overAllRatingText:{
            color:"#878787",
        },
        sizeVaration:{
            color:"#878787",
            fontSize:'15px',
        },
        sizeVarationGrid:{
            textAlign:"center"
        },
        sizeVarationText:{
            border: '2px solid #f0f0f0',
            padding: '6px',
            textTransform:'uppercase'
        },
        sizeChartText:{
            color:"#2874f0"
        },
        buyNowBtn:{
            textTransform:'uppercase',
            backgroundColor:'#fb641b',
            padding: '13px',
            fontWeight: 600,
            fontSize: '15px',
        },
        offerBadge:{
            color:"#fb641b"
        },
        productDetailsTitle:{
            fontSize:"25px",
            fontWeight:600,
            boxShadow:"unset",
            padding:"0px"
        },
        productDetailsLable:{
            color:"#878787",
        },
    },
    checkOutPage:{
        checkoutBox:{
            marginTop:"50px",
            marginBottom:"50px"
        },
        checkOutPaperBox:{
            padding:"20px"
        },
        checkOutStepLable:{
            fontSize:"25px !important"
        },
        checkOutPageStepContentContainerGridSecond:{
            textAlign:"right"
        },
        listBtn:{
            border:"1px solid #fc2779"
        },
        continueBtn:{
            backgroundColor:"#fc2779",
            mt: 1, 
            mr: 1
        },
        orderSummryTypography:{
            padding:"15px 20px",
            color:"#878787",
            textTransform:'uppercase'
        },
        orderSummryContainerGridOne:{
            borderBottom:"1px solid #f0f0f0"
        },
        orderSummryContainerGridSecond:{
            padding:"15px 20px",
        },
        orderSummryPaybalGrid:{
            borderTop:'1px dashed #e0e0e0',
            padding:"20px 0px"
        },
        orderSummryPaybalText:{
            fontSize:'18px',
            fontWeight: 600,
        },
        orderSummryContainerGridSeCondcontainerGrid:{
            textAlign:"right"
        }
    },
    mainLayOut:{
        marginTop:"60px",
        marginBottom:"60px"
    },
    cursorPointer:{
        cursor:"Pointer"
    },
    profile:{
        dashboard:{
            paperGridContainer:{
                padding:"40px"
            }
        },
    },
    trackOrder:{
        paperGridContainer:{
            padding:"40px"
        },
        gridSecondContainer:{
            justifyContent:"center",
            textAlign:"center"
        },
        paperGridContainerGrid:{
            borderBottom:"1px solid #f0f0f0"
        },
        gridSecondContainerGrid:{
            marginTop:"20px"
        },
        trackOrderBtn:{
            padding:"10px",
            textTransform:"capitalize"
        }
    },
    defaultBgColor:{
        backgroundColor:"#fc2779"
    },
    paperGridContainerPadding:{
        padding:"40px"
    },
    loginPage:{
        gridContinerSecond:{
            padding:"10px",
            textAlign:"center"
        },
        gridContinerSecondGridFirst:{
            paddingBottom:"10px",
            borderBottom:"1px solid #f0f0f0"
        },
        loginSignup:{
            textAlign:"left",
            color:"#fc2779"
        },
        label:{
            textAlign:"left",
        },
        authText:{
            padding:'14px',
        },
        loginSignupBtn:{
            textTransform: 'capitalize',
            padding:'10px',
        }
    }
});

export default CustomTheme;