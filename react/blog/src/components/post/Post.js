import React from 'react';

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