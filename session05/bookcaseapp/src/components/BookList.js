import React, {useState} from "react";
import Book from "./Book.js"
import PropTypes from "prop-types";


const BookList = (props) => {
        const {books, addBook, removeBook}=props
        
          return books.map((book) => {
            return (removeBook?<Book book={book} removeBook={removeBook}/>: <Book book={book} addBook={addBook}/>)
          });
        }
            
    
        export default BookList;
        
    