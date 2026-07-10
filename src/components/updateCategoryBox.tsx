import { Box, Button, Dialog, DialogContent, TextField, Typography } from "@mui/material";
import { Category } from "../../generated/prisma/client";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/app/hooks";
import { updateCategory } from "@/app/slices/categorySlice";
interface Parameters {
    openUpdateCategory : boolean,
    setOpenUpdateCategory : (value : boolean)=> void,
    selectedCategory : Category,
    setSelectedCategory : (value : undefined)=>void,
}
const UpdateCategoryDialogBox = ({openUpdateCategory , setOpenUpdateCategory , setSelectedCategory, selectedCategory} : Parameters)=>{
    const dispatch = useAppDispatch();
    const [updateCategoryName, setUpdateCategoryName] = useState<string>("");
    
    useEffect(() => {
        if(selectedCategory) {
            setUpdateCategoryName(selectedCategory.name)
        }
    } , [ selectedCategory ])

    const handleUpdateCategory = async ()=>{
        await dispatch(updateCategory({categoryName : updateCategoryName , id : selectedCategory.id}))
        setOpenUpdateCategory(false)
    }

    return(
        <Box>
            <Dialog open={openUpdateCategory} onClose={()=>{setOpenUpdateCategory(false)}} >
                 <DialogContent sx={{display : "flex" , flexDirection : "column" , gap : "30px" , bgcolor : "#ebc0c07f"}}>
                    <Typography sx={{fontSize : "25px", color : "#541d1dff" , fontFamily : "cursive"}} >Update Category..</Typography>
                    <TextField 
                    onChange={(event)=>{setUpdateCategoryName(event.target.value)}}
                    value={updateCategoryName }
                    sx={{
                        '& .MuiInputLabel-root': {fontFamily: "Cursive" , color: '#5d2929', } ,
                        '& .MuiInput-underline:after': {borderBottomColor: '#5d2929',},
                        '& .MuiInputLabel-root.Mui-focused': {color: '#c39696ff', fontFamily: '"Cursive"' },
                    }}
                    slotProps={{
                         input: {
                            sx: {
                                color: '#5d2929',
                                fontFamily: '"Comic Sans MS", sans-serif',
                            },
                        },
                    }} 

                    variant="standard"></TextField>
                    <Box sx={{display : "flex" , justifyContent : "end" , gap : "12px"}} >
                        <Button variant="outlined" sx={{borderColor : "#5d2929" , color : "#5d2929", fontFamily : "cursive"}} onClick={()=>{setOpenUpdateCategory(false)}} >Cancel</Button>
                        <Button variant="contained" disabled={!updateCategoryName} sx={{bgcolor : "#5d2929" , fontFamily : "cursive" }} onClick={()=>{handleUpdateCategory()}}>Confirm</Button>
                    </Box>
                 </DialogContent>
            </Dialog>
        </Box>
    )
}
export default UpdateCategoryDialogBox;