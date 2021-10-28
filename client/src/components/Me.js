

function Me({ currentUser, handleDelete }) {

    const userbooks = (currentUser.books);
    const bookList = userbooks.map(book => 
         <li key={book.id}>
             {book.title}
             <button onClick={() => handleDelete(book.id, currentUser)}>Delete Book</button>
         </li>
    )

    return (
        <div>
            <div className='bar'></div>

            <h2>{currentUser.username}: {currentUser.name}</h2>
            <h2>{currentUser.email}</h2>
            <ul>
                <h3>My Books</h3>
                {bookList}
            </ul>
        </div>
    );
}

export default Me;