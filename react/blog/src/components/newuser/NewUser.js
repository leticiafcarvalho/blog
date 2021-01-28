import React from 'react';

const NewUser = ({onUserSubmit}) => {
    return (
        <div>
            <form onSubmit={onUserSubmit}>
                <input type="text" id="nome" placeholder="Digite seu nome" />
                <input type="text" id="email" placeholder="Digite seu e-mail" />
                <input type="date" id="datanascimento" placeholder="Data de nascimento" />
                <input type="password" id="senha" placeholder="Digite uma senha" />
                <input type="submit" value="Cadastrar" />
            </form>
        </div>
    );
};

export default NewUser;