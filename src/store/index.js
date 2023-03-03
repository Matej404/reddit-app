import { configureStore, combineReducers } from "@reduxjs/toolkit";
import redditReducer from "./redditSlice";
import subreditReducer from "./subRedditSlice"

export default configureStore({
    reducer: combineReducers({
        reddit: redditReducer,
        subreddit: subreditReducer
    })
})