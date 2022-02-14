import React, { useState, useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './styles/App.css';
import Header from './components/Header';
import BookList from './components/BookList';
import About from './pages/About';
import data from './models/local-books.json';

const App = () => {
  const [books, setBooks] = useState(data);
  const [bookcase, setBookcase] = useState([]);

  const addToBookcase = (id) => {
    setBookcase(bookcase.concat(books.filter(book => book.id === id)));
    setBooks([...books.map(book => {
      if (book.id === id) {
        book.read = true;
      }
      return book;
    }
    )]);
  }

  const removeFromBookcase = (id) => {
    setBookcase(bookcase.filter(book => book.id !== id));
    setBooks([...books.map(book => {
      if (book.id === id) {
        book.read = false;
      }
      return book;
    }
    )]);
  }

  useEffect(() => {
    document.title = `My Library ${bookcase.length} Read`;
    Array.from(document.getElementsByClassName("bookLink")).forEach((el) => {
      el.innerText = ` Bookcase (${bookcase.length})`;
    });
  });

  return (
    <Router>
      <div className="container">
        <Route exact path="/" render={() => (
          <Fragment>
            <Header bookLength={bookcase.length} />
            <BookList books={books} stored="library" addToBookcase={addToBookcase} removeFromBookcase={removeFromBookcase} />
          </Fragment>
        )} />
        <Route path="/bookcase" render={() => (
          <Fragment>
            <Header bookLength={bookcase.length} />
            <BookList books={bookcase} stored="bookcase" addToBookcase={addToBookcase} removeFromBookcase={removeFromBookcase} />
          </Fragment>
        )} />
        <Route path="/about" component={() => <About bookLength={bookcase.length} />} />
      </div>
    </Router>
  );
}

export default App;
