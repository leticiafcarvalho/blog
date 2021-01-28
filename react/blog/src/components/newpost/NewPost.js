import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './newpost.css';

const NewPost = ({ onPostSubmit }) => {
    return (
        <div class="form-group container-fluid">
            <br/>
            <h1 class="text-primary">Cadastro de novo Post</h1>
            <form onSubmit={onPostSubmit}>
                <div class="row col-md-12">
                    <div class="form-group col-md-12">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Título</span>
                            </div>
                            <input type="text" class="form-control" id="titulo" placeholder="Exemplo: Minha primeira Viagem" />
                        </div>
                    </div>
                </div>
                <div class="row col-md-12">
                    <div class="form-group col-md-12">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Descrição</span>
                            </div>
                            <textarea class="form-control" id="descricao" />
                        </div>
                    </div>
                </div>
                <div class="row col-md-12">
                    <div class="input-group col-md-6">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Localização</span>
                        </div>
                        <input type="text" class="form-control" id="localizacao" placeholder="Ex: Campinas, SP - Brasil" />
                    </div>

                    <div class="input-group col-md-6">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Id Usuário</span>
                        </div>
                        <input type="text" class="form-control" id="idusuario" placeholder="Ex: 9" />
                    </div>
                </div>
                <div>
                    <br/>
                </div>
                <div class="row">
                    <div class="col text-center">
                        <input type="submit" class="btn btn-primary" value="Cadastrar" />
                    </div>
                </div>


            </form>
        </div>
    );
};

export default NewPost;