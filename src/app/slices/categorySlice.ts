import { CategoryType, DeleteCategoryType } from '@/type/categoryType'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Category } from '../../../generated/prisma/client'
import { filterAndSortList } from 'next/dist/build/utils'

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

export const deleteCategory = createAsyncThunk("deleteCategory", async( category :DeleteCategoryType  , thunkApi)=>{
  const response = await fetch("http://localhost:3000/api/category",{
      method : "DELETE",
      headers : {"content-type" : "application/json"},
      body : JSON.stringify({id : category.id})
  })
  const {deletedCategory} = await response.json();
  thunkApi.dispatch(deleteCategoryinSlice(deletedCategory))
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
    }, 
    deleteCategoryinSlice : (state, action : PayloadAction<Category> )=>{
        state.values = state.values.filter((eachObject)=>{ return eachObject.id !== action.payload.id})
    }
    }

  },
)

export const { addCategorytoSlice , setCategoriesUsingUserId , deleteCategoryinSlice } = categorySlice.actions

export default categorySlice.reducer