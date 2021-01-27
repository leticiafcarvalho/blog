import React from 'react';
import Book from '../book/Book'

const Books = ({ books, deleteBookHandle }) => {
    return (
        <div>
            {
                books.map((book, index) => {
                    return (
                        <Book
                            name={book.name}
                            author={book.author}
                            pages={book.pages}
                            id={book.id}
                            key={index}
                            click={() => deleteBookHandle(index)}
                        />
                    );
                })
            }
        </div>
    );
};

export default Books;
