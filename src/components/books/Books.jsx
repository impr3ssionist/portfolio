import React from "react";
import "./Books.css";

const Books = () => {
  return (
    <div>
      <span className="book-shelf-title">my read shelf:</span>
      <br />
      <a
        href="https://www.goodreads.com/review/list/9886043?shelf=read"
        title="Caleb's book recommendations, liked quotes, book clubs, book lists (read shelf)"
        rel="nofollow"
      >
        <img
          border="0"
          alt="Caleb's book recommendations, liked quotes, book clubs, book lists (read shelf)"
          src="https://s.gr-assets.com/images/badge/badge1.jpg"
        />
      </a>
    </div>
  );
};

export default Books;
