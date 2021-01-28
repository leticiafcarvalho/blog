import React from 'react';
import Post from '../post/Post'

const Posts = ({ posts }) => {

    return (
        <div> 
            <h1 class="text-primary">Posts</h1>
            {
                posts?.map((post, index) => {
                    return (
                        <Post
                            titulo={post.titulo}
                            descricao={post.descricao}
                            localizacao={post.localizacao}
                            idpost={post.idpost}
                            key={index}
                        />
                    );
                })
            }
        </div>
    );
};

export default Posts; 
