import { useState } from 'react';
import Header from '../components/Header';
import BookList from './BookList';

const HomePage = (props) => {
    const {books, addBook} =props;

    return(
    <>
    <h2> Welcome to Doreen's Bookcase App</h2>
    <p>Click on the <b>Add Book </b> buttton to add a book to your bookcase.</p>
    <BookList  books={books} addBook={addBook}></BookList>
</>
    );
}
export default HomePage;