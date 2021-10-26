import './App.css';

import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Header';
import Search from './Search';

import NewBookForm from './NewBookForm';
import NewAuthorForm from './NewAuthorForm';

import BookList from './BookList';
import AuthorList from './AuthorList';
import BookDetails from './BookDetails';


function App() {

  const [newBookInput, setNewBook] = useState(
    {title: '', image: '', isbn: '', desc: '', publisher: '', author: []}
    );

  const [newAuthorInput, setNewAuthor] = useState(
    {name: '', image: '', desc: ''}
    );

  const [booksList, setBooksList] = useState([]);

  const [getAuthors, setGetAuthors] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/authors")
    .then(response => response.json())
    .then(authorArr => setGetAuthors(authorArr))
    }, [setNewAuthor, newAuthorInput, newBookInput])

  useEffect(() => {
    fetch(`http://localhost:3000/books`)
    .then(resp => resp.json())
    .then(books => setBooksList(books))
  },[setNewBook, newBookInput, newAuthorInput]);

  function handleSubmit(e) {

    e.preventDefault();

    if(e.target.id === 'newBookForm') 
    {fetch(`http://localhost:3000/books`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newBookInput)})
      .then(resp => resp.json())
      .then(() => setNewBook({title: '', image: '', isbn: '', desc: '', publisher: '', author: ''}))
    }
    else 
    {fetch(`http://localhost:3000/authors`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newAuthorInput)})
      .then(resp => resp.json())
      .then(() => setNewAuthor({name: '', image: '', desc: ''}))
    }
  }

  const filteredBooks =  booksList.filter(book => book.title.toLowerCase().includes(search.toLowerCase()))
  const filteredAuthors =  getAuthors.filter(author => author.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="App">

      <Header />
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
          <Search search={search} setSearch={setSearch}/>
          <AuthorList filteredAuthors={filteredAuthors}/>
        </Route>

        <Route path='/'>
          <Search search={search} setSearch={setSearch}/>
          <BookList filteredBooks={filteredBooks}/>
        </Route>

      </Switch>
      
    </div>
  );
}

export default App;
