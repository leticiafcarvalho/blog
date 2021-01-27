import React from 'react';

const AlterBook = ({ alterBookSubmit }) => {
    return (
        <div>
            <form onSubmit={alterBookSubmit}>
                <input type="text" id="name" placeholder="Digite o nome do livro" />
                <input type="text" id="author" placeholder="Digite o nome do autor" />
                <input type="text" id="pages" placeholder="Digite o numero de paginas" />
                <input type="submit" value="Alterar" />
            </form>
        </div>
    );
};

export default AlterBook;