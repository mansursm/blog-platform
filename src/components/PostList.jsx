/**
 * Renders a list of posts.
 *
 * @component
 * @returns {JSX.Element} The PostList component.
 */
import React from "react";
import { useEffect, useState, useRef } from "react";
import Card from "./Card";
import "./PostList.css";
import { useNavigate } from "react-router";
import { fetchPostsAsync } from "../features/HomePage/postsSlice";
import { useDispatch, useSelector } from "react-redux";
import { getPostsInPage, getTotalPages, setItemsPerPage, updatePages } from "../features/HomePage/postsSlice";

function PostList() {
  const [currentPage, setCurrentPage] = useState(1);
  const containerRef = useRef(null); // reference to the postLists container
  const pages = useSelector(getTotalPages)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const posts =useSelector(state => getPostsInPage(state, currentPage))

  useEffect(() => {
    dispatch(fetchPostsAsync()).then(() => {
      const itemsPerPage = calculateItemsPerPage();
      dispatch(setItemsPerPage(itemsPerPage));
      dispatch(updatePages());
    });
  });

  useEffect(() => {
    // update items per page based on the window width
    const handleResize = () => {
      const itemsPerPage = calculateItemsPerPage();
      dispatch(setItemsPerPage(itemsPerPage));

      // when the number of items per page changes the total number of pages also needs to be updated
      dispatch(updatePages());

      // adjust the current page if the number of pages is less than the current page
      if (pages < currentPage) {
        setCurrentPage(pages);
      }

    };

    handleResize(); // call the function to set the initial items per page

    window.addEventListener("resize", handleResize);

    return () => {
     
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch, pages, currentPage]);

  /**
   * Calculates items per page based on the window width.
   */
  const calculateItemsPerPage = () => {
    const container = containerRef.current;
    const card = container.querySelector(".card"); // get the first card

    if (!card) return 6;  // return default value if no card is found

    const cardRect = card.getBoundingClientRect(); // get the card dimensions
    const cardWidth = cardRect.width;
    const cardHeight = cardRect.height;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight - 130;

    // calculate the number of items per row and column
    const itemsPerRow = Math.floor(windowWidth / cardWidth);
    const itemsPerColumn = Math.floor(windowHeight / cardHeight);

    // calculate the number of items per page
    const itemsPerPage = itemsPerRow * itemsPerColumn;

    return itemsPerPage;
  }

  /**
   * Handles the click event for the card component.
   *
   * @param {Event} event - The event object.
   * @returns {undefined}
   */
  const handleClick = (id) => {
    navigate("/post/" + id);
  }

  // handle paginationBtn click
  const handlePaginationBtnClick = (ev) => {
    setCurrentPage(Number(ev.target.innerText)) 
  }

  // return buttons
  const paginationBtns = (totalPages) => {
    return Array.from({length: totalPages}, (_, i) => i + 1).map((index) => (
      <button
        key={index}
        className={`paginationBtn ${currentPage === index ? "active" : ""}`}
        type="button"
        onClick={handlePaginationBtnClick}
      >
        {index}
      </button>
    ));
  }
  return (
    <>
      <div className="postLists" ref={containerRef}>
        {posts.map((post) => (
          <Card
            key={post[0]}
            post={post}
            handleClick={() => handleClick(post[0])}
          />
        ))}
      </div>
      <div className="paginationControl">
        {
          paginationBtns(pages)
        }
      </div>
    </>
  );
}

export default PostList;
