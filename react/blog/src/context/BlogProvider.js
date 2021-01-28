import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const BlogContext = React.createContext();

const BlogProvider = (props) => {

    const [users, setUsers] = useState({});

    useEffect(async () => {
        const response = await axios.get('http://localhost:3000/usuarios')
            .catch(err => console.log("Erro: ", err))

        setUsers(response.data);
    }, []);

    const [posts, setPosts] = useState({});

    useEffect(async () => {
        const response = await axios.get('http://localhost:3000/posts')
            .catch(err => console.log("Erro: ", err))

        setPosts(response.data);
    }, [])

    return (
        <BlogContext.Provider value={{ users: users }, { posts: posts }}>
            {props.childrean}
        </BlogContext.Provider>
    );
}

export default BlogProvider;