import React from 'react';
import '../book/Book.css';

const User = (props) => {
  return (
    <div className="Book">
      <p>{props.nome}</p>
      <p>{props.email}</p>
      <p>{props.datanascimento}</p>
    </div>
  );
}

export default User;