import { Link } from 'react-router-dom';
import { useState } from 'react';

function BookCard({ book }) {

    const [selectedClass, setClass] = useState('notDisplayed')

    const placeHolder = 'https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088777_640.png'

    const {title, image=placeHolder, id} = book 

    const handleClass = (e) => {
        setClass('displayed')
    }

    const handleNoClass = (e) => {
        setClass('notDisplayed')
    }

    return (
        <Link to={`/books/${id}`} onMouseEnter={e => handleClass(e)} onMouseLeave={e => handleNoClass(e)}>
            <div className='bookCard' onClick={e => console.log(e.target.className)} id={id}>
                <h2 className={selectedClass}>{title}</h2>
                <img src={image === '' ? placeHolder : image} alt={title} />
            </div>
        </Link>
    );

}

export default BookCard;