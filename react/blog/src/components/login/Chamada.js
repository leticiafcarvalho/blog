import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

class Chamada extends PureComponent {
  render() {
    return (
      <section className="block block-gradient">
        <div className="wrapper">
          <p>Não possui cadastro? Entre aqui.</p>
          <Link to="/usuarios/salvar">
            <button className="btn-default btn-dark">Criar conta</button>
          </Link>
        </div>
      </section>
    );
  }
}

export default Chamada;