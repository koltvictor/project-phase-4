import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function AuthorCard({authorObj}) {

    const {image_url, name, description, books} = authorObj;

    const bookTitles = books.map(book => 
        <Link to={`/books/${book.id}`} key={book.title}><p>{book.title}</p></Link>)

    const imagePlacehold = image_url !== '' ? image_url : 'https://www.nurses.co.uk/Images/Blog/author/b9e8a8fc-446d-4a24-84ae-416ed35e107f.png';
    const bookPlacehold = books.length !== 0? bookTitles : "This author doesn't have any books listed yet!";

    const [isClicked, setIsClicked] = useState(true)
    

    function handleToggleClick(){
        setIsClicked((previousIsClicked) => {
            return !previousIsClicked
        })
    }

    return (
        <div onClick={handleToggleClick}>
            {isClicked ? (
            <div className="author-cardss">
                <div className='image'>
                    <img className="cardImage" src={imagePlacehold} alt={name} />
                </div>
                <h3>{name}</h3>
            </div>
            ):(
                <div className="author-card">
                <h4>{name}</h4>
                <p>{description}</p>
                <h4>Books:</h4>
                {bookPlacehold}
            </div>
            )
            }
            </div>
        
    );

}

export default AuthorCard;