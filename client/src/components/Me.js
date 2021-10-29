

function Me({ currentUser, handleBookDelete, userBooks }) {

    const bookList = userBooks.map(book =>{ 
        const index = userBooks.indexOf(book);
        // console.log(index)
         return <li key={book.id}>
             {book.title}
             <button className="deleteButton" onClick={() => handleBookDelete(book.id, index)}>Delete</button>
         </li>}
    )

    return (
        <div className="myPage"><br /><br /><br/>
            <div className='bar'><h2>{currentUser.username}'s Dashboard</h2></div>
            <div className="myPageBody">
                <h3>Hi {currentUser.username}!</h3>
                <h3>Your email on file:  {currentUser.email}</h3><br /><br/>
                <ul className="myBooksList">
                    <h3>My Books</h3>
                    {bookList}
                </ul>
            </div>
        </div>
    );
}

export default Me;