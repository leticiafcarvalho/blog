import React from 'react';
import { useLocation } from 'react-router-dom';
import '../defaultcss/default.css';

const FullPost = () => {

    let post = useLocation().state.post;

    return (
        <div className="Default">
            <div>
                <p>Titulo: {post.titulo}</p>
            </div>
            <p> Descrição: {post.descricao}</p>
            <p>Localização: {post.localizacao}</p>
        </div>
    );
};

export default FullPost;
