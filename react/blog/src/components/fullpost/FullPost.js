import React, { useEffect } from 'react';
import Post from '../post/Post';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const FullPost = () => {

    let post = useLocation().state.post;
    let index = useLocation().state.index;

    return (
        <div className="FullPost">
            <div>
                <p>Titulo: {post.titulo}</p>
            </div>
            <p> Descrição: {post.descricao}</p>
            <p>Localização: {post.localizacao}</p>
        </div>
    );
};

export default FullPost;
