import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { sendUserInfo } from "@/app/slices/userSlice";
import { Box, Button, IconButton, Typography } from "@mui/material"
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Administration = ()=>{

    const router = useRouter();

    const  { data } = useSession()

    const dispatch = useAppDispatch();

    useEffect(() => {
        
        if(data && data.user && data.user.name && data.user.email) {
          
            dispatch(sendUserInfo({ name : data.user.name , email : data.user.email}))

        }
    } , [data])

    return(
        <Box>
            <Button onClick={()=>{router.push("/admin/category")}} >To CategoryPage</Button>
            {/* <Button onClick={()=>{signOut({callbackUrl : "/"})}}>Log out</Button> */}
        </Box>
    )
}
export default Administration;