import { Box, Button, IconButton, Typography } from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';
import NewCategoryBox from "@/components/newCategoryBox";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { useSession } from "next-auth/react";
import { sendUserInfo } from "@/app/slices/userSlice";
import { Category } from "../../../../generated/prisma/client";
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import DeleteCategoryBox from "@/components/deleteCategoryBox";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import UpdateCategoryDialogBox from "@/components/updateCategoryBox";
import AdminSideBar from "@/components/adminSideBar";

const CategoryPage = ()=>{
    const [selectedCategory, setSelectedCategory] = useState<Category>();
    const [openUpdateDialogBox, setOpenUpdateDialogBox] = useState(false);
    const [openDialogBox, setOpenDialogBox] = useState(false);
    const [openDeleteDialogBox , setOpenDeleteDialogBox ] =useState<boolean>(false);
    const categories = useAppSelector((store)=> store.category.values ) 
    const  { data } = useSession()

        const dispatch = useAppDispatch();

        useEffect(() => {
            
            if(data && data.user && data.user.name && data.user.email) {
            
                dispatch(sendUserInfo({ name : data.user.name , email : data.user.email}))

            }
        } , [data])



    return(
        <Box sx={{display : "flex", alignItems : "center",  flexDirection : "column", marginTop : "30px" }} >
            <Box sx={{alignItems : "center", display : "flex", justifyContent : "space-between", width : "100vw", paddingX : "60px"}} >
                <Box>
                    <AdminSideBar/>

                    {selectedCategory && 
                    <IconButton onClick={()=>setOpenUpdateDialogBox(true)} >
                        <BorderColorIcon sx={{fontSize : "40px" , color : "#672c2cff" }} />
                    </IconButton> }
    
                </Box>
                <Box sx={{bgcolor : "#e9c8c8ff" , width : "300px" , display : "flex", alignItems : "center", flexDirection : "column", padding : "20px", borderRadius : "10px" }} >
                    <Typography sx={{fontFamily : "cursive", fontSize : "30px", color : "#672c2cff"}}>..Category..</Typography>
                </Box>
                <Box sx={{display :"flex"}}>
                    <IconButton onClick={()=>{setOpenDialogBox(true)}} >
                        <Box sx={{bgcolor : "#672c2cff" , width : "40px" , height : "40px", display : "flex", alignItems : "center", justifyContent : "center"}} >
                            <AddBoxIcon sx={{fontSize : "60px", color : "#e9c8c8ff" ,   }} />
                        </Box>
                    </IconButton>
                    {selectedCategory ? 
                    <IconButton onClick={()=>{setOpenDeleteDialogBox(true)}}>
                        <Box sx={{ bgcolor : "#672c2cff", width : "28px", display : "flex", alignItems : "center", justifyContent : "center", height : "26px"}} >
                            <DeleteForeverRoundedIcon  sx={{fontSize : "61px"  , color : "#e9c8c8ff",   }} />
                        </Box>
                    </IconButton>
                    : <span/>
                    }
                </Box>
            </Box> 
            <Box sx={{display : "flex", flexWrap : "wrap" , gap : "50px",   width : "100vw" , padding : "66px" }} >

                {

                    categories.map((eachCate)=>{return (

                        <Box key={eachCate.id} onClick={()=>{setSelectedCategory(eachCate)}} sx={{padding : "25px", bgcolor : "#e9c8c8ff", boxShadow : ( eachCate.id === selectedCategory?.id ?  "0 0 40px #5e1233ff" : "none" ) , border : "2px solid #672c2cff", borderRadius : "10px" , cursor : "pointer"}} >
                            <Typography sx={{fontFamily : "cursive" ,fontSize : "23px" , color : "#672c2cff"}} >{eachCate.name}</Typography>
                        </Box>

                    )})

                }

            </Box>

            {selectedCategory && <DeleteCategoryBox setSelectedCategory={setSelectedCategory} deleteCateBoxOpen={openDeleteDialogBox} setdeleteCateBoxClose={setOpenDeleteDialogBox} selectedCategory={selectedCategory}/>}
            <NewCategoryBox openParameter={openDialogBox} openParameterSet={setOpenDialogBox}  /> 
            {selectedCategory &&<UpdateCategoryDialogBox openUpdateCategory={openUpdateDialogBox} setOpenUpdateCategory={setOpenUpdateDialogBox} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />  }
            
        </Box>
    )
}
export default CategoryPage;