//imports

function NewAuthorForm({ newAuthorInput, setNewAuthor, handleSubmit }) {

    const {name, image, desc} = newAuthorInput;
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
                       name='image'
                       value={image}
                       onChange={e => setNewAuthor({...newAuthorInput, [e.target.name]: e.target.value})} />

                <input type='text'
                       className='formText'
                       placeholder='Description'
                       name='desc'
                       value={desc}
                       onChange={e => setNewAuthor({...newAuthorInput, [e.target.name]: e.target.value})} />

                <input type='submit'
                       value='Submit' />

            </form>

            <div className="added-author-info">
                <h4>New Author Name:</h4>
                <p>{name}</p>
                <br />
                <h4>New Author Image:</h4>
                <img src={image} alt={name}/>
                <h4>New Author Bio: </h4>
                <p>{desc}</p>
            </div>

        </div>
    );

}

export default NewAuthorForm;