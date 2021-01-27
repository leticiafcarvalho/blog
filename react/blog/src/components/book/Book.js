import React from 'react';
import BookImage from '../bookimage/BookImage';
import { Link } from 'react-router-dom';
import './Book.css';

const Book = (props) => {
  return (
    <div className="Book">
      <Link to={"/livros/" + props.id}><BookImage /></Link>
      <p>{props.name}</p>
      <p>{props.author}</p>
      <p>{props.pages}</p>
      <p>{props.children}</p>
      <button onClick={props.click}>Apagar Livro</button>
    </div>
  );
}

export default Book;