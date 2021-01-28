import React from 'react';
import User from '../usuario/User'

const Users = ({ users }) => {

    return (
        <div>
            {
                users?.map((user, index) => {
                    return (
                        <User
                            nome={user.nome}
                            email={user.email}
                            datanascimento={user.datanascimento}
                            id={user.id}
                            key={index}
                        />
                    );
                })
            }
        </div>
    );
};

export default Users;
