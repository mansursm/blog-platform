/**
 * Renders a list of posts.
 *
 * @component
 * @returns {JSX.Element} The PostList component.
 */
import React from "react";
import Card from "./Card";
import "./PostList.css";

function PostList() {
  return (
    <d className="postLists">
        <Card post={["14003", "Post Excerpt 1", "#DevOps, #IT, #Architecture", "2024-05-20"]} />
        <Card post={["14003", "Post Excerpt 1", "#DevOps, #IT, #Architecture", "2024-05-20"]} />
        <Card post={["14003", "Post Excerpt 1", "#DevOps, #IT, #Architecture", "2024-05-20"]} />
        <Card post={["14003", "Post Excerpt 1", "#DevOps, #IT, #Architecture", "2024-05-20"]} />
        <Card post={["14003", "Post Excerpt 1", "#DevOps, #IT, #Architecture", "2024-05-20"]} />
        <Card post={["14003", "Post Excerpt 1", "#DevOps, #IT, #Architecture", "2024-05-20"]} />
    </d>
  );
}

export default PostList;
