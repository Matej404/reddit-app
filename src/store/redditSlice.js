import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    isLoading: false,
    error: false,
    searchTerm: "",
    selectedSubReddit: "/r/pics/"
}

const redditSlice = createSlice({
    name: "redditPosts",
    initialState,
    reducers: {
        setSearchTerm(state, action) {
            state.selectedSubReddit = action.payload;
        }
    }
})

export const {setSearchTerm} = redditSlice.actions;

export default redditSlice.reducer;