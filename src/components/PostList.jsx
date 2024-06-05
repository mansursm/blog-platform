/**
 * Renders a list of posts.
 *
 * @component
 * @returns {JSX.Element} The PostList component.
 */
import React from "react";
import { useEffect, useState } from "react";
import Card from "./Card";
import "./PostList.css";
import { useNavigate } from "react-router";
import { fetchPostsAsync } from "../features/HomePage/postsSlice";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../features/HomePage/postsSlice";

function PostList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const posts = useSelector(getAllPosts);

  useEffect(() => {
    dispatch(fetchPostsAsync());
  }, [dispatch]);

  /**
   * Handles the click event for the card component.
   *
   * @param {Event} event - The event object.
   * @returns {undefined}
   */
  const handleClick = (id) => {
    navigate("/post/" + id);
  }



  return (
    <div className="postLists">
      {posts.map((post) => (
        <Card 
          key={post[0]} 
          post={post} 
          handleClick={() => handleClick(post[0])} 
        />
      ))}
    </div>
  );
}

export default PostList;
