import { useEffect, useState } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';

function BookDetails() {

    const [singleBook, setSingleBook] = useState({});
    const [authors, setAuthors] = useState([]);

    const placeHolder = 'https://pbs.twimg.com/media/DAB0513WAAAIQpd.png'

    const id = useParams().id;
    let history = useHistory();

    useEffect(() => {
        fetch(`/books/${id}`)
        .then(resp => resp.json())
        .then(book => {setSingleBook(book);
                       setAuthors(book.authors)})
    }, [id])

    const {title, image_url, isbn, description, publisher} = singleBook
    
    const authorNames = authors.map(el => {
        return (<Link to={`/authors`} key={el.name}>
                    <h2 key={el.name}>{el.name}</h2>
                </Link> )}
    );

    return (
        <div className='bookDetails'>
            <img src={image_url !== ''? image_url : placeHolder} alt={title}/>

            <h1>{title}</h1><br />
            <h2>Authored By:</h2>
            {authorNames}<br />
            <h3>{publisher} Publishing House</h3>
            <p>ISBN-10: {isbn}</p>
            <p>{description}</p>
            <Link to='/books' onClick={() => history.goBack()}>
                <button>Back</button>
            </Link>
        </div>
    );

}

export default BookDetails;