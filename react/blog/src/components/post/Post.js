import React from 'react';
import '../defaultcss/default.css';

const Post = (props) => {
  return (
    <div className="Default">
        <p>Título: {props.titulo}</p>
        <p>Drscrição: {props.descricao}</p>
        <p>Localização: {props.localizacao}</p>
    </div>
  );
}

export default Post; 