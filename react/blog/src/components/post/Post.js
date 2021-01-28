import React from 'react';
import '../defaultcss/default.css';

const Post = (props) => {
  return (
    <div className="Default">
      <br/>
        <p>Título: {props.titulo}</p>
        <p>Drscrição: {props.descricao}</p>
        <p>Localização: {props.localizacao}</p>
        <button class="btn btn-danger" onClick={props.click}>Apagar post</button>
    </div>
  );
}

export default Post; 