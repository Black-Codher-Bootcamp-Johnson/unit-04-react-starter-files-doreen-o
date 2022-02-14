import React from 'react';
import Book from './components/Book';
import bookList from './models/books.json';

function App() {
  const books = bookList;
  return <Book/>;
}

export default App;

