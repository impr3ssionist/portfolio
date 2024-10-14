import "./Books.css";

const Books = () => {
  return (
    <div>
      <h2 className="book-shelf-title">My Read Shelf:</h2>
      <a
        href="https://www.goodreads.com/review/list/9886043?shelf=read"
        title="Caleb's book recommendations, liked quotes, book clubs, book lists (read shelf)"
        target="_blank"
        rel="noopener noreferrer nofollow"
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
