//imports

function NewAuthorForm({ newAuthorInput, setNewAuthor, handleSubmit }) {

    const {name, image_url, description} = newAuthorInput;
    console.log(newAuthorInput)

    return (
        <div className='author-form'>

            <h2>Additional Authors</h2>

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
                <h4>New Author Name:</h4>
                <p>{name}</p>
                <br />
                <h4>New Author Image:</h4>
                <img src={image_url} alt={name}/>
                <h4>New Author Bio: </h4>
                <p>{description}</p>
            </div>

        </div>
    );

}

export default NewAuthorForm;