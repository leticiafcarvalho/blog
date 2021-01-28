import React, { PureComponent, Fragment } from "react";
import Chamada from "./Chamada";
import "./Login.css";

class Login extends PureComponent {
  render() {
    return (
      <Fragment>
        <div class="form-group container-fluid">
          <h1 class="text-primary">Login</h1>
          <form>
            <div class="row col-md-12 ">
              <div class="form-group col-md-6 offset-md-5">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">E-mail</span>
                  </div>
                  <input type="text" id="email" placeholder="exemplo@teste.com" />
                </div>
              </div>
            </div>
            <div class="row col-md-12">
              <div class="input-group col-md-6 offset-md-5">
                <div class="input-group-prepend">
                  <span class="input-group-text">Senha</span>
                </div>
                <input type="password" id="senha" placeholder="Digite uma senha" />
              </div>
            </div>
            <div>
              <br />
            </div>
            <button type="button" className="btn-default btn-primary">
              Acessar
              </button>
            <br />
            <a href="#" className="form-link">
              Esqueci minha senha
              </a>
          </form>
        </div>

        <Chamada />
      </Fragment>
    );
  }
}

export default Login;