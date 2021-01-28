import React from 'react';
import '../book/Book.css';

const Post = (props) => {
  return (
    <div className="Book">
        <p>{props.titulo}</p>
        <p>{props.descricao}</p>
        <p>{props.localizacao}</p>
    </div>
  );
}

export default Post; 