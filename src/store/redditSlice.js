import { createSlice, createSelector } from "@reduxjs/toolkit";

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
            state.searchTerm = action.payload;
        }
    }
})

export const {setSearchTerm} = redditSlice.actions;

export default redditSlice.reducer;

const selectPosts = (state) => state.reddit.posts;
const selectSearchTerm = (state) => state.reddit.searchTerm;

export const selectedFilteredPosts = createSelector(
    [selectPosts, selectSearchTerm],
    (posts, searchTerm) => {
        if(searchTerm !== "") {
            return posts.filter((post) => post.title.toLowerCase().include(searchTerm.toLowerCase()))
        }
    }
)