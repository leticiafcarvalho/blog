import React from 'react';

const NewPost = ({onPostSubmit}) => {
    return (
        <div>
            <form onSubmit={onPostSubmit}>
                <input type="text" id="titulo" placeholder="Digite um titulo" />
                <input type="text" id="descricao" placeholder="Descrição" />
                <input type="text" id="localizacao" placeholder="Localização" />
                <input type="text" id="idusuario" placeholder="Id do usuario" />
                <input type="submit" value="Cadastrar" />
            </form>
        </div>
    );
};

export default NewPost;