import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import Books from './components/books/Books';
import Usuarios from './components/usuarios/Users';
import NewBook from './components/newbook/NewBook';
import AlterBook from './components/alterbook/AlterBook';
import Header from './components/header/Header';
import FullBook from './components/fullbook/FullBook';

function App() {

  const [books, setBooks] = useState(
    [
      {
        id: 1,
        name: "Naruto",
        author: "Masashi",
        pages: "50"
      },
      {
        id: 2,
        name: "One piece",
        author: "Oda",
        pages: "50"
      }
    ]
  );

  const [users, setUsers] = useState(
    [
      {
        idusuario: 9,
        nome: "Matheus Davy",
        nivel: 0,
        email: "matheusdavy@gmail.com",
        senha: "123456",
        datanascimento: "2021-01-15T03:00:00.000Z",
        idstatus: 1,
        idstatusconta: 1
      }
    ]
  );

  useEffect(() => {
    axios.get('http://localhost:3000/usuarios')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => {
        console.log("Erro: ", err)
      })
  }, [])

  const [showBooks, setShowBooks] = useState(true);

  const [style, setStyle] = useState({
    backgroundColor: 'green',
    color: 'white'
  })

  const onBookSubmit = (event) => {
    event.preventDefault();

    let newBooks = [...books,
    {
      id: books.length + 1,
      name: event.target.name.value,
      author: event.target.author.value,
      pages: event.target.pages.value
    }];

    setBooks(newBooks);
  }

  const alterBookSubmit = (event) => {
    event.preventDefault();

    let booksList = books.slice();
    const book = booksList.find(element => element.name === event.target.name.value);

    book.name = event.target.name.value;
    book.author = event.target.author.value;
    book.pages = event.target.pages.value;

    onTooogleBooks();
  }

  const onTooogleBooks = () => {
    setShowBooks(!showBooks);
    let newStyle = { ...style };
    if (style.backgroundColor === 'green') {
      newStyle.backgroundColor = 'red';
    } else {
      newStyle.backgroundColor = 'green';
    }
    setStyle(newStyle);
  }

  const deleteBookHandle = (index) => {

    let newBooks = books.slice();
    newBooks.splice(index, 1);
    setBooks(newBooks);
  }


  return (
    <BrowserRouter>

      <div className="App">

        <Header />
        <h1>Livros</h1>
        <Switch>

          <Redirect from="/" to="/livros" exact />

          <Route path="/livros" exact>
            <Books books={books} deleteBookHandle={deleteBookHandle} />
          </Route>

          <Route path="/usuarios" exact>
            <Usuarios users={users} />
          </Route>

          <Route path="/livros/novolivro" exact>
            <NewBook onBookSubmit={onBookSubmit} />
          </Route>

          <Route path="/livros/alterarlivro" exact>
            <AlterBook alterBookSubmit={alterBookSubmit} />
          </Route>

          <Route path="/livros/:id" exact>
            <FullBook books={books}/>
          </Route>

          <Route render={() => <div> Página não encontrada </div>} />

        </Switch>
      </div>

    </BrowserRouter>
  );
}

export default App;
