import { userInfoType } from '@/type/userInfoType'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { User } from '../../../generated/prisma/client'
import { setCategoriesUsingUserId } from './categorySlice'

export interface UserState {
  value: User | null
}

const initialState: UserState = {
  value: null,
}

export const sendUserInfo =  createAsyncThunk( "sendUserInfo" , async  ( userInfo : userInfoType , thunkApi ) =>{
    const response = await fetch("http://localhost:3000/api/userInfo",{
      method : "POST",
      headers : {"content-type" : "application/json"},
      body : JSON.stringify({name : userInfo.name , email : userInfo.email})
    })

    const { createdUserInfo , retrieveCategories } = await response.json()
    
    thunkApi.dispatch(setUserInfoInSlice(createdUserInfo))
    thunkApi.dispatch(setCategoriesUsingUserId(retrieveCategories))
})

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
   
    setUserInfoInSlice : ( currentState , action )=>{
      currentState.value = action.payload
    }

  },
})

export const {  setUserInfoInSlice } = userSlice.actions

export default userSlice.reducer