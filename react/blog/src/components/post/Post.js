import React from 'react';
import '../defaultcss/default.css';

const Post = (props) => {
  return (
    <div className="Default">
        <p>{props.titulo}</p>
        <p>{props.descricao}</p>
        <p>{props.localizacao}</p>
        <button onClick={props.click}>Apagar livro</button>

    </div>
  );
}

export default Post; 