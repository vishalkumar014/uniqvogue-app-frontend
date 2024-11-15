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
            color:"#000",
            fontSize:"20px",
            textAlign:"center",
            cursor:"pointer"
        },
        headerMenu:{
            justifyContent:"end",
            cursor:"pointer"
        }
    },

});

export default CustomTheme;