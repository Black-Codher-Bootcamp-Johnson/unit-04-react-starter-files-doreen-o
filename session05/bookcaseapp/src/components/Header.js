import {Link} from 'react-router-dom';
import React, {useState} from 'react';

const Header = (props) => {
return (

    <React.Fragment>
<header>
<h1 className="header-title"> My Bookcase</h1>
<Link to="/"> Homepage</Link>
<Link to="/bookcase" className="bookLink">Bookcase</Link>
<Link to="/about"> About Us</Link>
</header>
    </React.Fragment>
)}

export default Header;

// doesnt match possible bug
