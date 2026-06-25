import { Geist, Geist_Mono } from "next/font/google";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";



export default function Home() {

  const router = useRouter();

  return (
       <Box sx={{display : "flex", alignItems : "center", justifyContent : "center", height : "100vh" }}>
          <Button onClick={()=>{router.push("/authentication")}} sx={{color : "red" , fontFamily : "cursive" , border : "1px solid red"}} >To Auth Page</Button>
       </Box>
  );
}
