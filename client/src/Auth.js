import './App.css';

import { useState, useEffect } from 'react';

import { Route, Switch, useHistory } from 'react-router-dom';

import Header from './components/Header';
import Me from './components/Me';

import Search from './components/Search';

import AuthorList from './components/AuthorList';
import NewAuthorForm from './components/NewAuthorForm';

import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import NewBookForm from './components/NewBookForm';


function Auth({ currentUser, setCurrentUser, userBooks, setUserBooks }) {

  const history = useHistory();

  const handleLogout = () => {
    fetch(`/logout`, {
      method: 'DELETE',
      credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          setCurrentUser(null)
          history.push('/')
        }
      })
  };

  const [newBookInput, setNewBook] = useState(
    {title: '', image_url: '', isbn: '', description: '', publisher: '', price: '', author: []}
    );

  const [newAuthorInput, setNewAuthor] = useState(
    {name: '', image_url: '', description: ''}
    );

  //hold books in state, then delete deleted one from the array, then put the state in dep arr for book and author fetch

  const [booksList, setBooksList] = useState([]);

  const [getAuthors, setGetAuthors] = useState([]);

  const [search, setSearch] = useState("");

  const author = "Search by First or Last Name";
  const book = "Search by Book Title";

  useEffect(() => {
    fetch("/authors")
    .then(response => response.json())
    .then(authorArr => setGetAuthors(authorArr))
    }, [setNewAuthor, newAuthorInput, newBookInput])

  useEffect(() => {
    fetch(`/books`)
    .then(resp => resp.json())
    .then(books => setBooksList(books))
  },[setNewBook, newBookInput, newAuthorInput]);

  function handleSubmit(e) {
    e.preventDefault();
    if(e.target.id === 'newBookForm')
    {fetch(`/books`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newBookInput)})
      .then(resp => resp.json())
      .then(() => setNewBook({title: '', image_url: '', isbn: '', description: '', publisher: '', price: '', author: []}))
    }
    else
    {fetch(`/authors`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newAuthorInput)})
      .then(resp => resp.json())
      .then(() => setNewAuthor({name: '', image_url: '', description: ''}))
    }
  };

  function handleBookDelete(id, index) {
    fetch(`/books/${id}`, {
      method: 'DELETE'
    })
    .then(fetch('/me')
      .then(resp => resp.json())
      .then(user => console.log(user)))
    
  };

  const filteredBooks = booksList.filter(book => (book.title||'').toLowerCase().includes(search.toLowerCase()));

  const filteredAuthors = getAuthors.filter(author => (author.name||'').toLowerCase().includes(search.toLowerCase()));


  return (
    <div className="App">

      <Header currentUser={currentUser}
              handleLogout={handleLogout}/>

      {/* <Search search={search} setSearch={setSearch}/> */}

      <Switch>

        <Route path='/books/new'>
          <NewBookForm newBookInput={newBookInput}
                      setNewBook={setNewBook}
                      handleSubmit={handleSubmit}
                      getAuthors={getAuthors} />
        </Route>

        <Route path='/books/:id' component={BookDetails} />

        <Route path='/authors/new'>
          <NewAuthorForm newAuthorInput={newAuthorInput}
                      setNewAuthor={setNewAuthor}
                      handleSubmit={handleSubmit} />
        </Route>

        <Route path='/authors'>
          <Search search={search} setSearch={setSearch} word={author} />
          <AuthorList filteredAuthors={filteredAuthors}/>
        </Route>

        <Route path='/books'>
          <Search search={search} setSearch={setSearch} word={book} />
          <BookList filteredBooks={filteredBooks}/>
        </Route>

        <Route path='/me'>
          <Me currentUser={currentUser} 
              handleBookDelete={handleBookDelete}
              userBooks={userBooks} />
        </Route>
        

      </Switch>

    </div>
  );
}
export default Auth;