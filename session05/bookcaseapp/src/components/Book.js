import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  
  var formatter = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: props.book.saleInfo.listPrice ? props.book.saleInfo.listPrice.currencyCode : "GBP"
  });
  

  return (
    <div className="book">
      <h2>{props.book.volumeInfo.title}</h2>
      <h3 className="author">{props.book.volumeInfo.authors}</h3>
      <img src={props.book.volumeInfo.imageLinks.smallThumbnail} alt={props.book.volumeInfo.title + 'book cover image'}></img>
      <p className="price">{props.book.saleInfo.listPrice ? formatter.format(props.book.saleInfo.listPrice.amount) : "No price Defined"}</p>
      <p> {props.book.volumeInfo.subtitle}</p>
      <p>{props.book.volumeInfo.description}</p>
      {props.removeBook ? (
        <button className="remove-button" onClick={() => props.removeBook(props.book.id)} >Remove Book</button>)
      :
      (<button className="add-button" onClick={() => props.addBook(props.book.id)}>Add Book</button> )}
    </div>
  );
};

export default Book;
