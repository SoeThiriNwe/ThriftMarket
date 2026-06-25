import { Box, Button, IconButton, Typography } from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';
import NewCategoryBox from "@/components/newCategoryBox";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { useSession } from "next-auth/react";
import { sendUserInfo } from "@/app/slices/userSlice";
const Category = ()=>{


    const  { data } = useSession()

        const dispatch = useAppDispatch();

        useEffect(() => {
            
            if(data && data.user && data.user.name && data.user.email) {
            
                dispatch(sendUserInfo({ name : data.user.name , email : data.user.email}))

            }
        } , [data])


    const [openDialogBox, setOpenDialogBox] = useState(false);

    const userInfo = useAppSelector((store) => store.user.value )
    console.log(userInfo)

    return(
        <Box sx={{display : "flex", alignItems : "center",  flexDirection : "column", marginTop : "50px" }} >
            <Box sx={{alignItems : "center", display : "flex", justifyContent : "space-between", width : "100vw", paddingX : "150px"}} >
                <span/>
                <Box sx={{bgcolor : "#e9c8c8ff" , width : "300px" , display : "flex", alignItems : "center", flexDirection : "column", padding : "20px", borderRadius : "10px" }} ><Typography sx={{fontFamily : "cursive", fontSize : "30px", color : "#672c2cff"}}>..Category..</Typography></Box>
                <IconButton onClick={()=>{setOpenDialogBox(true)}} >
                    <Box sx={{bgcolor : "#672c2cff" , width : "40px" , height : "40px", display : "flex", alignItems : "center", justifyContent : "center"}} >
                        <AddBoxIcon sx={{fontSize : "60px", color : "#e9c8c8ff" ,   }} />
                    </Box>
                </IconButton>
            </Box>        
            <NewCategoryBox openParameter={openDialogBox} openParameterSet={setOpenDialogBox}  />    
        </Box>
    )
}
export default Category;