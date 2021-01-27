import React from 'react';
import BookImage from '../bookimage/BookImage';
import '../book/Book.css';

const BookOff = (props) => {
  return (
    <div className="Book">
      <BookImage />
      <p>{props.name}</p>
      <p>{props.author}</p>
      <p>{props.pages}</p>
      <p>{props.children}</p>
    </div>
  );
}

export default BookOff;