import React from "react";
import "./Home.css";
import Post from "../Post/Post";
import { useSelector } from "react-redux";
import { selectedFilteredPosts } from "../../store/redditSlice";

export default function Home() {
    const posts = useSelector(selectedFilteredPosts);

    return(
        <div>
            {posts.map((post) => (
                <Post post={post} key={post.id} />
            ))}
        </div>
    )
}