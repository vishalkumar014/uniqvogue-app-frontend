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

});

export default CustomTheme;