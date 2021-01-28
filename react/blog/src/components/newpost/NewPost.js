import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const NewPost = ({onPostSubmit}) => {
    return (
        <div class="form-group">
            <form onSubmit={onPostSubmit}>
                <input type="text" class="form-control" id="titulo" placeholder="Digite um titulo" />
                <input type="text" class="form-control" id="descricao" placeholder="Descrição" />
                <input type="text" class="form-control" id="localizacao" placeholder="Localização" />
                <input type="text" class="form-control" id="idusuario" placeholder="Id do usuario" />
                <input type="submit" value="Cadastrar" />
            </form>
        </div>
    );
};

export default NewPost;