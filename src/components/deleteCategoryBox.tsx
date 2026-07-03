import { Box, Button, Dialog, DialogActions, DialogContent, Typography } from "@mui/material"
import { Category } from "../../generated/prisma/client"
import { useAppDispatch } from "@/app/hooks";
import { deleteCategory } from "@/app/slices/categorySlice";


interface deleteCateBoxType {

    selectedCategory : Category;
    deleteCateBoxOpen : boolean,
    setdeleteCateBoxClose : (value : boolean)=>void,
    setSelectedCategory : (value : undefined)=>void

}


const DeleteCategoryBox = ( {selectedCategory , setdeleteCateBoxClose , deleteCateBoxOpen , setSelectedCategory } : deleteCateBoxType )=>{

    const dispatch = useAppDispatch();

    const handleDeleteCategory = async ()=>{
        await dispatch(deleteCategory({id : selectedCategory.id}))
        setdeleteCateBoxClose(false)
        setSelectedCategory(undefined)

    }

    return(
        <Box > 
            <Dialog   open={deleteCateBoxOpen} onClose={()=>{setdeleteCateBoxClose(false)}}>
                <DialogContent sx={{border : "2px solid #541d1dff",bgcolor : "#ebc0c07f" ,borderBottom : "none" , padding : "20px"}}>
                    <Typography sx={{fontSize : "20px", fontFamily : "cursive", color : "#421414ff"}}>Are you sure to delete " {selectedCategory.name} "? </Typography>
                </DialogContent>
                <DialogActions sx={{border : "2px solid #541d1dff",bgcolor : "#ebc0c07f" ,borderTop : "none" , padding : "20px"}} >
                    <Button onClick={()=>{setdeleteCateBoxClose(false)}} variant="outlined" sx={{borderColor : "#541d1dff" , color : "#541d1dff" , fontFamily : "cursive"}} >
                        cancel
                    </Button>
                    <Button onClick={()=>{handleDeleteCategory()}} sx={{bgcolor : "#541d1dff" , color : "white" , fontFamily : "cursive"}} >
                        confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}
export default  DeleteCategoryBox