import { Box, Button, Divider, Input, TextField, Typography } from "@mui/material";
import { signIn, useSession } from "next-auth/react";

const Authentication = ()=>{

    return(
        <Box sx={{display : "flex", justifyContent : "center", alignItems : "center" , height : "100vh"}}>
            <Box sx={{border : "2px solid black",gap : "12px" , display : "flex", justifyContent : "center", alignItems : "center"  , flexDirection : "column",padding : "15px", borderRadius :  "8px"}}>
                <Typography variant="h6" sx={{fontFamily : "cursive"}}>Please Login</Typography>
                <TextField variant="filled" label="Name"/>
                <TextField variant="filled" label="Password"/>
                <Button onClick={()=>{signIn("google", {callbackUrl : "/admin"})}} variant="outlined" sx={{border : "1px solid black" , color : "black", fontFamily : "cursive", }} >Continue with Gmail</Button>
            </Box>
        </Box>
    );
}
export default Authentication;