import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './Profile';

function App() {
  return (
      <Profile name="[YOUR NAME]" bio="[YOUR SHORT BIO GOES HERE]" />
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

