import { createTheme } from "@mui/material";

const theme = createTheme({
    typography : {
        fontFamily : "cursive",
        h5 : {
            fontWeight : "bold"
        }
    },
    palette : {
        primary : {
            main : "#e9c8c8ff"
        },
        secondary : {
            main : "#672c2cff"
        }
    }
});
export default theme;
