import React, { useEffect } from "react";
import "./Home.css";
import Post from "../Post/Post";
import { useSelector, useDispatch } from "react-redux";
import { selectFilteredPosts,
        fetchPosts,
        fetchComments,
        setSearchTerm } from "../../store/redditSlice";
import { AnimatedList } from "react-animated-list";
import getRandomNumber from "../../utils/getRandomNumber";
import PostLoading from "../Post/PostLoading";

export default function Home() {
    const reddit = useSelector((state) => state.reddit);
    const { searchTerm, isLoading, error, selectedSubReddit } = reddit;
    const posts = useSelector(selectFilteredPosts);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchPosts(selectedSubReddit));
    }, [selectedSubReddit]);

    const onToggleComments = (index) => {
        const getComments = (permalink) => {
            dispatch(fetchComments(index, permalink))
        };

        return getComments;
    }

    if (isLoading) {
      return (
        <AnimatedList animation="zoom">
          {Array(getRandomNumber(3, 10)).fill(<PostLoading />)}
        </AnimatedList>
      );
    }

    if (error) {
        return (
          <div className="error">
            <h2>Failed to load posts.</h2>
            <button
              type="button"
              onClick={() => dispatch(fetchPosts(selectedSubReddit))}
            >
              Try again
            </button>
          </div>
        );
      }
      

      if (posts.length === 0) {
        return (
          <div className="error">
            <h2>No posts matching "{searchTerm}"</h2>
            <button type="button" onClick={() => dispatch(setSearchTerm(''))}>
              Go home
            </button>
          </div>
        );
      }

    return(
        <div className="home">
          {posts.map((post, index) => (
            <Post
                key={post.id}
                post={post}
                onToggleComments={onToggleComments(index)}
                />
              ))}
        </div>
    )
}
