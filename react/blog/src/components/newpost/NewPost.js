import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const NewPost = ({ onPostSubmit }) => {
    return (
        <div class="form-group container-fluid">
            <h1>Cadastro de novo Post</h1>
            <form onSubmit={onPostSubmit}>
                <div class="form-group">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Título</span>
                        </div>
                        <input type="text" class="form-control" id="titulo" placeholder="Exemplo: Minha primeira Viagem" />
                    </div>
                </div>
                <div class="form-group">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Descrição</span>
                        </div>
                        <textarea class="form-control" id="descricao" />
                    </div>
                </div>
                <div class="form-group">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Localização</span>
                        </div>
                        <input type="text" class="form-control" id="localizacao" placeholder="Ex: Campinas, SP - Brasil" />
                    </div>
                </div>
                <div class="form-group">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Id Usuário</span>
                        </div>
                        <input type="text" class="form-control" id="idusuario" placeholder="Ex: 9" />
                    </div>
                </div>
                <div class="form-group">
                    <input type="submit" class="btn btn-primary" value="Cadastrar" />
                </div>

            </form>
        </div>
    );
};

export default NewPost;