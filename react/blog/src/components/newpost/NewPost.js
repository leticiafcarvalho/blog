import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const NewPost = ({ onPostSubmit }) => {
    return (
        <div class="form-group container-fluid">
            <h1>Cadastro de novo Post</h1>
            <form onSubmit={onPostSubmit}>
                <div class="form-group">
                    <input type="text" class="form-control" id="titulo" placeholder="Digite um titulo" />
                </div>
                <div class="form-group">

                    <textarea class="form-control" id="descricao" placeholder="Descrição" />
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="localizacao" placeholder="Localização" />
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="idusuario" placeholder="Id do usuario" />
                </div>
                <div class="form-group">
                    <input type="submit" class="btn btn-primary" value="Cadastrar" />
                </div>

            </form>
        </div>
    );
};

export default NewPost;