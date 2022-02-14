import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

const BookList = ({ books, ...props }) => {
  return (
    <div className="list">
      <div>
        {props.stored === "library" && <h2>Suggested Reading</h2>}
        {books.length === 0 ? (
          <div className="empty">No books...</div>
        ) : (
          books
            .filter((book) => props.stored === "bookcase" || !book.read)
            .map((book) => <Book key={book.id} book={book} {...props} />)
        )}
      </div>
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.array.isRequired,
};

export default BookList;
