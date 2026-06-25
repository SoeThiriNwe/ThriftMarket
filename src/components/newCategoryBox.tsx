import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { createCategory } from "@/app/slices/categorySlice";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material"
import { useState } from "react";
import { CategoryType } from '@/type/categoryType'

interface DialogType {
    openParameter : boolean,
    openParameterSet : (value : boolean)=> void
}

const NewCategoryBox = ( { openParameter , openParameterSet } : DialogType )=>{
    const [categoryname , setCategoryname] = useState<string>("");
    const dispatch = useAppDispatch();

    const userfromStore  = useAppSelector((store)=> {return store.user.value});

    if(!userfromStore) return null;

    const handleDispatchCreateCategory = ()=>{
        dispatch(createCategory({ categoryName: categoryname , userId : userfromStore.id }))
    }
    
    return(
        <Box>
            <Dialog open={openParameter} onClose={() => {openParameterSet(false)}} > 
            <DialogTitle sx={{color : "#672c2cff", fontFamily : "cursive"  }} >...Add New Category...</DialogTitle>
            <DialogContent  >
                <TextField
                    onChange={(event)=>{setCategoryname(event.target.value)}} 
                    variant="standard" label="category" 
                    sx={{
                        '& .MuiInputLabel-root': {fontFamily: "Cursive" , color: '#5d2929', } ,
                        '& .MuiInput-underline:after': {borderBottomColor: '#5d2929',},
                        '& .MuiInputLabel-root.Mui-focused': {color: '#c39696ff', },
                    }}
                    slotProps={{
                         input: {
                            sx: {
                                color: '#5d2929',
                                fontFamily: '"Comic Sans MS", sans-serif',
                            },
                        },
                    }} 
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => { handleDispatchCreateCategory() }} variant="text" sx={{color : "#672c2cff",fontFamily : "cursive"  }} >Add</Button>
            </DialogActions>
            </Dialog>
        </Box>
    )
}
export default NewCategoryBox;
