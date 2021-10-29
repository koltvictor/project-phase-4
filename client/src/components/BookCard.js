import { Link } from 'react-router-dom';
import { useState } from 'react';

function BookCard({ book }) {

    const [selectedClass, setClass] = useState('notDisplayed')

    const placeHolder = 'https://pbs.twimg.com/media/DAB0513WAAAIQpd.png'

    const {title, image_url=placeHolder, id} = book 

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
                <img src={image_url === '' ? placeHolder : image_url} alt={title} />
            </div>
        </Link>
    );

}

export default BookCard;