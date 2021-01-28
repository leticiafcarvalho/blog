import React from 'react';
import '../defaultcss/default.css';

const User = (props) => {
  return (
    <div className="Default">
      <p>{props.nome}</p>
      <p>{props.email}</p>
      <p>{props.datanascimento}</p>
    </div>
  );
}

export default User;