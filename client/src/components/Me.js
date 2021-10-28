

function Me({ currentUser }) {

    console.log(currentUser.books);

    return (
        <div>
            <h2>{currentUser.username}</h2>
            <h2>{currentUser.email}</h2>
        </div>
    );
}

export default Me;