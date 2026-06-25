import { CategoryType } from '@/type/categoryType'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Category } from '../../../generated/prisma/client'

export interface UserState {
  values : Category[]
}

const initialState: UserState = {
  values : []
}

export const createCategory = createAsyncThunk("createCategory",async (category : CategoryType  , thunkApi)=>{
    const response = await fetch("http://localhost:3000/api/category",{
        method : "POST",
        headers : {"content-type": "application/json" },
        body : JSON.stringify({name : category.categoryName , userId : category.userId})

        
    }); 

    const { createdCategory } = await response.json();
    thunkApi.dispatch(addCategorytoSlice(createdCategory))
}) 


export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
   
    addCategorytoSlice : (state, action)=>{
        state.values = [...state.values , action.payload]
    },
    setCategoriesUsingUserId : (state, action)=>{
        state.values = action.payload
    }
    
    }

  },
)

export const { addCategorytoSlice , setCategoriesUsingUserId  } = categorySlice.actions

export default categorySlice.reducer