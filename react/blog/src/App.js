import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import Posts from './components/posts/Posts';
import Usuarios from './components/usuarios/Users';
import NewUser from './components/newuser/NewUser';
import NewPost from './components/newpost/NewPost';
import Header from './components/header/Header';

function App() {

  const [users, setUsers] = useState();

  useEffect(async () => {
    const response = await axios.get('http://localhost:3000/usuarios')
      .catch(err => console.log("Erro: ", err))

    setUsers(response.data);
  }, []);

  const [posts, setPosts] = useState();

  useEffect(async () => {
    const response = await axios.get('http://localhost:3000/posts')
      .catch(err => console.log("Erro: ", err))

    setPosts(response.data);
  }, [])


  const onUserSubmit = (userInfo) => {
    userInfo.preventDefault();
    const newUser = {
      nome: userInfo.target.nome.value,
      email: userInfo.target.email.value,
      senha: userInfo.target.senha.value,
      datanascimento: userInfo.target.datanascimento.value
    }

    axios.post('http://localhost:3000/usuario/salvar', newUser)
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log("Erro: ", err);
    })
  }

  const onPostSubmit = (postInfo) => {
    postInfo.preventDefault();
    const newPost = {
      titulo: postInfo.target.titulo.value,
      descricao: postInfo.target.descricao.value,
      localizacao: postInfo.target.localizacao.value,
      idusuario: postInfo.target.idusuario.value,
    }

    axios.post('http://localhost:3000/post/salvar', newPost)
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log("Erro: ", err);
    })
  }

  return (
    <BrowserRouter>

      <div className="App">

        <Header />

        <Switch>

          <Redirect from="/" to="/usuarios" exact />

          <Route path="/usuarios" exact>
            <Usuarios users={users} />
          </Route>

          <Route path="/usuarios/salvar" exact>
            <NewUser onUserSubmit={onUserSubmit} />
          </Route>

          <Route path="/posts" exact>
            <Posts posts={posts} />
          </Route>

          <Route path="/posts/salvar" exact>
            <NewPost onPostSubmit={onPostSubmit} /> 
          </Route>

          <Route render={() => <div> Página não encontrada </div>} />

        </Switch>
      </div>

    </BrowserRouter>
  );
}

export default App;
