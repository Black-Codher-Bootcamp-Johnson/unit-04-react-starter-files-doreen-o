import React from "react";
import { Link } from "react-router-dom";

const About = (props) => {
    return(
        <div className="header">
            <h1>About</h1>
                <div className="breadcrumb">
                    <Link to="/"> Home </Link>
                    <Link to="/bookcase" className="bookLink">
                        {" "}
                        Bookcase ({props.bookLength})
                    </Link>
                </div>

                <div className="page">
                <h2>Welcome to the Bookcase Application</h2>
                <p>The following application was created by Doreen Otieno. This bookcase app displays a list of books that a user can save to a local bookcase.
                    It connects to the Google Books API.
                    <br/>
                    Click on the "Add Book" buttton to add a book to your bookcase. 
                    <br/>
                    Use the Search bar to find the latest books by name, author or description.
                    </p>
                </div>
        </div>
    );
};

export default About;
