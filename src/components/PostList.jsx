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

function PostList() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // const key = process.env.REACT_APP_API_KEY;
    // const blogs = process.env.REACT_APP_BLOG_ID;
    // const url = `https://www.googleapis.com/blogger/v3/blogs/${blogs}/posts?key=${key}`;
  
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        // JSONPlaceholder does not have labels and published fields, so adjust the data accordingly
        const posts = data.map((post) => {
          return [post.id, post.title, ["#DevOps", "#IT", "#Architecture"].join(", "), "2024-05-20"];
        });
        setPosts(posts);
      } catch (error) {
        console.error("Error fetching posts: ", error);
      }
    };

    fetchPosts();

  }, []);
  // const posts = [
  //   ["14001", "Post Excerpt 1", "#DevOps, #IT, #Architecture", "2024-05-20"],
  //   ["14002", "Post Excerpt 2", "#DevOps, #IT, #Architecture", "2024-05-21"],
  //   ["14003", "Post Excerpt 3", "#DevOps, #IT, #Architecture", "2024-05-22"],
  //   ["14004", "Post Excerpt 4", "#DevOps, #IT, #Architecture", "2024-05-23"],
  //   ["14005", "Post Excerpt 5", "#DevOps, #IT, #Architecture", "2024-05-24"],
  //   ["14006", "Post Excerpt 6", "#DevOps, #IT, #Architecture", "2024-05-25"],
  //   ["14007", "Post Excerpt 7", "#DevOps, #IT, #Architecture", "2024-05-26"],
  //   ["14008", "Post Excerpt 8", "#DevOps, #IT, #Architecture", "2024-05-27"],
  //   ["14009", "Post Excerpt 9", "#DevOps, #IT, #Architecture", "2024-05-28"],
  //   ["140010", "Post Excerpt 10", "#DevOps, #IT, #Architecture", "2024-05-29"],
  //   ["140011", "Post Excerpt 11", "#DevOps, #IT, #Architecture", "2024-05-30"],
  //   ["140012", "Post Excerpt 12", "#DevOps, #IT, #Architecture", "2024-05-31"]
  // ];

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
