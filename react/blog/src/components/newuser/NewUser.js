import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'


const NewUser = ({ onUserSubmit }) => {
    return (
        <div class="form-group container-fluid">
            <br/>
            <h1 class="text-primary">Cadastro de novo Usuário</h1>
            <form onSubmit={onUserSubmit}>
                <div class="row col-md-12">
                    <div class="form-group col-md-12">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Nome</span>
                            </div>
                            <input type="text" class="form-control" id="nome" placeholder="Digite seu nome" />
                        </div>
                    </div>
                </div>
                <div class="row col-md-12">
                    <div class="form-group col-md-12">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">E-mail</span>
                            </div>
                            <input type="text" class="form-control" id="email" placeholder="exemplo@teste.com" />
                        </div>
                    </div>
                </div>
                <div class="row col-md-12">
                    <div class="input-group col-md-6">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Data de Nascimento</span>
                        </div>
                        <input type="date" class="form-control" id="datanascimento" placeholder="25/11/2005" />
                    </div>
                    <div class="input-group col-md-6">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Senha</span>
                        </div>
                        <input type="password" class="form-control" id="senha" placeholder="Digite uma senha" />
                    </div>
                </div>
                <div>
                    <br />
                </div>
                <input type="submit"  class="btn btn-primary" value="Cadastrar" />
            </form>
        </div>
    );
};

export default NewUser;