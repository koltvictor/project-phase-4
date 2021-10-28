

function Me({ currentUser, handleDelete }) {

    const userbooks = (currentUser.books);
    const bookList = userbooks.map(book => 
         <li key={book.id}>
             {book.title}
             <button className="deleteButton" onClick={() => handleDelete(book.id, currentUser)}>Delete Book</button>
         </li>
    )

    return (
        <div className="myPage"><br /><br /><br/>
            <div className='bar'><h2>{currentUser.username}'s Dashboard</h2></div>
            <div className="myPageBody">
                <h3>Hi {currentUser.username}!</h3>
                <h3>Your email address is:  {currentUser.email}</h3><br /><br/>
                <ul className="myBooksList">
                    <h3>My Books</h3>
                    {bookList}
                </ul>
            </div>
        </div>
    );
}

export default Me;