import React, {useState} from 'react';
import Book from './components/Book';
import Header from './components/Header';
import HomePage from './components/HomePage';
import BookList from './components/BookList';
import Search from './components/Search'; 
import bookData from './models/books.json';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './pages/About';
import BookcasePage from './pages/BookcasePage';
import './styles/App.css';


const App = () => {

  const [keyword, setKeyword] = useState("");
  const [books, setBooks] = useState(bookData);
  const [bookcase, setBookcase] =useState ([]);
  
  
  async function findBook(keyword) {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${keyword}&filter=paid-ebooks&print-type=books&projection=lite`;
  const results = await fetch(url).then((res) => res.json());
  
  if (!results.error) {
  setBooks(results.items);
  }

  else{
    console.log("API Error", results.error);
  }
  return results;
}
function addBook(id) {
  const bookToAdd = books.find((book) => book.id === id);
  console.log(bookToAdd)

  if (bookToAdd){
    setBookcase([...bookcase,bookToAdd]);
    setBooks(books.filter(book => book.volumeInfo.title !== bookToAdd.volumeInfo.title))
  }
  else {
    console.log("This book wasn't found in this bookcase");
  }
}

function removeBook(id){
  const bookToRemove = bookcase.find((book) => book.id === id);
  if (bookToRemove){
    setBookcase(bookcase.filter(book => book.volumeInfo.title !== bookToRemove.volumeInfo.title))
    setBooks([bookToRemove, ...books])
  }
  else{
    console.log('No books found');
  }
}
  
  return (
  <Router>
    <Header />
    <Search setKeyword={setKeyword} keyword={keyword} findBook={findBook} />
    
      <Routes>
      <Route exact path="/" element={
        
          <HomePage books={books} addBook={addBook}></HomePage> 
          
          
      }
      /> 
      <Route path="/bookcase" element={
      
        <BookcasePage bookcase={bookcase} removeBook={removeBook}></BookcasePage>
       
      
      }
      />
      <Route 
      path="About" element={
        <About/>
      }
      /> 
      </Routes>
      </Router>
   
  
  );
  
  };
  
  export default App;


