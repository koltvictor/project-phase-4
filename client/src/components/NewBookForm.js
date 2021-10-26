import { useState } from 'react';
// import Select from 'react-select';
// import makeAnimated from 'react-select/animated';


function NewBookForm({ newBookInput, setNewBook, handleSubmit, getAuthors }) {

    const [selectedAuthors, SetSelectedAuthors] = useState([]);

    // const animatedComponents = makeAnimated();
    const authorNames = [];

    getAuthors.map(author => authorNames.push({value: author.name, label: author.name, id: author.id}))

    const {title, image, isbn, desc, publisher, author} = newBookInput

    return (
        <div className='book-form'>

            <h2>Add A New Book!</h2>
            <p>NOTE: If you can't find a specific author, please create them first!</p>

            <form id='newBookForm' onSubmit={e => handleSubmit(e)}>

              <input type='text'
                       className='formText'
                       placeholder='Title'
                       name='title'
                       value={title}
                       onChange={e => setNewBook({...newBookInput, [e.target.name]: e.target.value})} />

              <input type='text'
                       className='formText'
                       placeholder='Cover Image'
                       name='image'
                       value={image}
                       onChange={e => setNewBook({...newBookInput, [e.target.name]: e.target.value})} />

              <input type='text'
                       className='formText'
                       placeholder='ISBN-10'
                       name='isbn'
                       value={isbn}
                       onChange={e => setNewBook({...newBookInput, [e.target.name]: e.target.value})} />

              <input type='text'
                       className='formText'
                       placeholder='Description'
                       name='desc'
                       value={desc}
                       onChange={e => setNewBook({...newBookInput, [e.target.name]: e.target.value})} />

              <input type='text'
                       className='formText'
                       placeholder='Publisher'
                       name='publisher'
                       value={publisher}
                       onChange={e => setNewBook({...newBookInput, [e.target.name]: e.target.value})} />

              {/* <Select
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                     value={author}
                    onChange={e => {
                        setNewBook(formerBook => ({...formerBook, author: e}));
                        SetSelectedAuthors(e)}}
                    defaultValue={[authorNames[4]]}
                    isMulti
                    options={authorNames} /> */}

              <input type='submit'
                     value='Submit' />

            </form>

            <div className="added-book-info">
                <h4>New Book Title:</h4>
                <p>{title}</p>
                <br />
                <h4>New Book Image:</h4>
                <img src={image} alt={title}/>
                <h4>ISBN: </h4>
                <p>{isbn}</p>
                <br />
                <h4>New Book Description:</h4>
                <p>{desc}</p>
                <br />
                <h4>New Book Publisher:</h4>
                <p>{publisher}</p>
                <br />
                <h4>New Book Author:</h4>
                {selectedAuthors.map(authorName => <p key={authorName.value}>{authorName.value}</p>)}
            </div>
 
        </div>
    );

}

export default NewBookForm;