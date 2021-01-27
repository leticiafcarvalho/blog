import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import BookOff from '../bookoff/BookOff'

const FullBook = ({ books }) => {

    const { id } = useParams();

    const book = acharBookPorid(books, id);

    useEffect((() => {
        //Fazer busca no DB utilizando o ID.
    }), [])

    return (
        <div>
            <BookOff
                name={book.name}
                author={book.author}
                pages={book.pages}
            />
        </div>
    );
};

export default FullBook;

const acharBookPorid = (books, id) => {

    let booksList = books.slice();
    const book = booksList.find(element => element.id === parseInt(id));
    return book;
}
