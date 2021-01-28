import React from 'react';
import '../post/Post.css';

const Post = (props) => {
  return (
    <div className="Post">
        <p>{props.titulo}</p>
        <p>{props.descricao}</p>
        <p>{props.localizacao}</p>
    </div>
  );
}

export default Post; 