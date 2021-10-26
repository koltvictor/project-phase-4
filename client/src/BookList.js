// import React from './react';
import BookCard from "./BookCard";

function BookList({ filteredBooks }) {
 
    const books = filteredBooks.map(book => 
        <BookCard book={book} key={book.id} />);

    return (
        <div className="books-container">
            <ul className="book-cards">
            {books}
            </ul>
        </div>
    );

}

export default BookList;