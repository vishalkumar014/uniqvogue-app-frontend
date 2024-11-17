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
            p:"1px 0px"
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

    }

});

export default CustomTheme;