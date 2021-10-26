import { Link, useHistory } from 'react-router-dom';

function Header() {

    let history = useHistory();

    return (
        <div className='App-header'>
            <h1>Recycled Reads</h1>
            <h3>"Your community collection of pre-loved books!"</h3>
            {/* <img src='https://64.media.tumblr.com/5d2d839cd70bc3db2fa9acddb9cedd92/tumblr_nbpotrjgO11qi4ibzo1_500.gifv' alt='flowers dancing' /> */}
            <div id='navigation'>
                <h2>
                    <Link to='/books' onClick={() => history.push('/books')}>Books</Link>
                </h2>
                <h2>
                    <Link to='/books/new' onClick={() => history.push('/books/new')}>Sell A Book</Link>
                </h2>
                <h2>
                    <Link to='/authors/new' onClick={() => history.push('/authors/new')}>Add An Author</Link>
                </h2>
                <h2>
                    <Link to='/authors' onClick={() => history.push('/authors')}>Authors</Link>
                </h2>
            </div>
        </div>
    );

}

export default Header;