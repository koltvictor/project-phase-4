//imports

function NewAuthorForm({ newAuthorInput, setNewAuthor, handleSubmit }) {

    const {name, image_url, description} = newAuthorInput;
    console.log(newAuthorInput)

    return (
        <div className="addAuthorPage"><br /><br /><br />
        <div className='bar'><h2>Add An Author</h2></div>
        <div className='author-form'>
 
            <form id='newAuthorForm' onSubmit={e => handleSubmit(e)}>

                <input type='text'
                       className='formText'
                       placeholder='Name'
                       name='name'
                       value={name}
                       onChange={e => setNewAuthor({...newAuthorInput, [e.target.name]: e.target.value})} />

                <input type='text'
                       className='formText'
                       placeholder='Image'
                       name='image_url'
                       value={image_url}
                       onChange={e => setNewAuthor({...newAuthorInput, [e.target.name]: e.target.value})} />

                <input type='text'
                       className='formText'
                       placeholder='Description'
                       name='description'
                       value={description}
                       onChange={e => setNewAuthor({...newAuthorInput, [e.target.name]: e.target.value})} />

                <input type='submit'
                       value='Submit' />

            </form>

            <div className="added-author-info">
                <h5><strong>New Author Name:</strong></h5>
                <p className="authorInfo">{name}</p>
                <br />
                <h5>New Author Image:</h5>
                <img className = "authorImg" src={image_url} alt={name}/>
                <h5>New Author Bio: </h5>
                <p className="authorInfo">{description}</p>
            </div>

        </div>

        </div>
    );

}

export default NewAuthorForm;