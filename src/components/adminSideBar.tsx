import { Box, Button, ButtonBase, Drawer, IconButton, Typography } from "@mui/material";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useState } from "react";
import { useAppSelector } from "@/app/hooks";
import AcUnitIcon from '@mui/icons-material/AcUnit';


const AdminSideBar = ()=>{

    const user = useAppSelector((store)=>{return store.user.value});
    const [openSideBar, setOpenSiderBar] = useState<boolean>(false);

    if(!user) return null;

    return(
        <Box>
            <IconButton onClick={()=>{setOpenSiderBar(true)}}  >
                <MenuRoundedIcon sx={{fontSize : "55px" , color : "secondary.main" }} />
            </IconButton>
            <Drawer open={openSideBar} onClose={()=>{setOpenSiderBar(false)}}>
                <Box sx={{ bgcolor : "primary.main", height : "100%" , border : "4px solid #672c2cff" , borderLeft : "none"}} >
                    <Typography variant="h5" sx={{color : "secondary.dark" , padding : "28px" ,}}  >{user.name}</Typography>
                    <Box component={ButtonBase} sx={{display : "flex" ,bgcolor :"white" ,  width : "100%" , gap : "20px" , alignItems : "center"}} >
                        <AcUnitIcon sx={{color : "secondary.main"}} />
                        <Typography sx={{fontSize : "19px" , color : "secondary.main"}} >ACUnit</Typography>
                    </Box>
                </Box>
            </Drawer>
        </Box>
    )
}
export default AdminSideBar;