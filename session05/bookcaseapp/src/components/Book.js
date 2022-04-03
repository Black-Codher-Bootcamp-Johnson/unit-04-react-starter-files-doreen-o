import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {

  return (
    <div>
      <h2>{props.book.volumeInfo.title}</h2>
      <h3>{props.book.volumeInfo.authors}</h3>
      <img src={props.book.volumeInfo.imageLinks.smallThumbnail} alt={props.book.volumeInfo.title + 'book cover image'}></img>
      <p>{props.book.saleInfo.listPrice ? props.book.saleInfo.listPrice.amount : "No price Defined"}</p>
      <p> {props.book.volumeInfo.subtitle}</p>
      <p>{props.book.volumeInfo.description}</p>
      {props.removeBook ? (
        <button onClick={() => props.removeBook(props.book.id)} className="remove-book-button">Remove Book</button>)
      :
      (<button onClick={() => props.addBook(props.book.id)}>Add Book</button> )}
    </div>
  );
};

export default Book;
