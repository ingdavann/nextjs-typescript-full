import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/redux/store";
import { stat } from "fs";
import { ACCESS_TOKEN, BASE_URL } from "@/lib/constants";

// Define a type for the user state
type UserProfile = {
    avatar: string;
    bio: string;
    create_at: string;
    updated_at: string;
}

// Define the initial state using that type
type initialStateType = {
    status: 'idle' | 'loading' | 'success' | 'failed',
    userProfile: UserProfile | null,
    error: string | undefined
}

const initialState: initialStateType = {
    status: 'idle',
    userProfile: null,
    error: undefined
}

// create Async thunk
export const fetchUserProfile = createAsyncThunk("userProfile/fetchUserProfile", async () => {
    const response = await fetch(`${BASE_URL}/api/user/profile`,{
        headers: {
           Authorization: `Bearer ${ACCESS_TOKEN}`
        }
    } 
    );
    const data = await response.json();
    return data;
})

// handle the userProfile asyns thunk by extraReducers
const userProfileSlice = createSlice({
    name: 'userProfile',
    initialState,
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserProfile.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
            state.status = 'success';
            state.userProfile = action.payload;
        })
        builder.addCase(fetchUserProfile.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
});

// export wihtout action by asyns thunk
export default userProfileSlice.reducer;

// create selector
export const selectAvatar = (state: RootState) => state.userProfile.userProfile?.avatar;
export const selectBio= (state: RootState) => state.userProfile.userProfile?.bio;