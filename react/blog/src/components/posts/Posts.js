import React from 'react';
import Post from '../post/Post';
import { Link } from 'react-router-dom';


const Posts = ({ posts, deletePostHandler }) => {

    return (
        <div>
            <h1 class="text-primary">Posts</h1>
            {
                posts?.map((post, index) => {
                    return (
                        <Link
                            to={{
                                pathname: '/posts/' + post.idpost,
                                state: {
                                    post: post,
                                    index: index,
                                },
                            }}
                            key={index}
                        >
                            <Post
                                titulo={post.titulo}
                                descricao={post.descricao}
                                localizacao={post.localizacao}
                                idpost={post.idpost}
                                deletePostHandler={deletePostHandler}
                            />
                        </Link>
                    );
                })
            }
        </div >
    );
};

export default Posts; 
