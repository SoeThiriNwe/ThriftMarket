import { Box, Button, Dialog, DialogContent, TextField, Typography } from "@mui/material";
interface Parameters {
    openUpdateCategory : boolean,
    setOpenUpdateCategory : (value : boolean)=> void
}
const UpdateCategoryDialogBox = ({openUpdateCategory , setOpenUpdateCategory} : Parameters)=>{
    return(
        <Box>
            <Dialog open={openUpdateCategory} onClose={()=>{setOpenUpdateCategory(false)}} >
                 <DialogContent sx={{display : "flex" , flexDirection : "column" , gap : "30px" , bgcolor : "#ebc0c07f"}}>
                    <Typography sx={{fontSize : "25px", color : "#541d1dff" , fontFamily : "cursive"}} >Update Category..</Typography>
                    <TextField
                    
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
                        <Button variant="contained" sx={{bgcolor : "#5d2929" , fontFamily : "cursive"}}>Confirm</Button>
                    </Box>
                 </DialogContent>
            </Dialog>
        </Box>
    )
}
export default UpdateCategoryDialogBox;