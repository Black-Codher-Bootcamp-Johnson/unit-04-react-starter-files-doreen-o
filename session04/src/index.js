import React, { useState, Fragment } from 'react';
import ReactDOM from 'react-dom';
//import bookArray from './models/books.json';

import BookCounter from './components/BookCounter';

const App = () => {
  const bookArray =  [{"title":"Half of a Yellow Sun"},{"title":"Born a Crime"},{"title":"Americanah"},{"title":"Ghana Must Go"}];
  const [localLibrary,setLibrary] = useState({name:"Sarah", books : bookArray});

  return <Fragment>
    <h1>Welcome to My Library</h1>
    <BookCounter library={localLibrary}/>
  </Fragment>;
}

ReactDOM.render(<App/>,document.getElementById('root'));
