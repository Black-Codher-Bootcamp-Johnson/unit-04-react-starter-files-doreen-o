import BookList from "../components/BookList";

const BookcasePage =(props) => {
const { bookcase, removeBook } = props;

return (

    <h2> Welcome to your personal Bookcase page.</h2>
    <p>Listed are the books you have added to your bookcase. To remove a book, click on the "Remove" button.</p>
    <BookList books={bookcase} removeBook={removeBook}></BookList>
    );
}

export default BookcasePage;