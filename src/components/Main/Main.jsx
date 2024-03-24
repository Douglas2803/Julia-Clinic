import React from "react";
import "./style.scss";
import Avatar from "../../img/julia-peossal.jpeg";
import Avatar2 from "../../img/clinica1.jpeg";
const Main = () => {
  return (
    <main>
      <section>
        <div className="self-img">
          <h1>Ilumine sua pele</h1>
        </div>
        <img src={Avatar2} alt="clinica" className="clinic-img" />
      </section>
      <section>
        <article className="background-content">
          <h2>Como Funciona?</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem et
            consectetur ducimus quisquam magnam maxime doloremque est pariatur,
            aspernatur quaerat commodi ab ipsa nemo quia quod dignissimos quo
            consequuntur deserunt ?
          </p>
        </article>
        <article className="background-content">
          <h2>Avaliação : o primeiro passo para iluminar sua pele </h2>
          <p>
            Iniciamos com a consulta personalizada. A avaliação é fundamental
            para traçarmos um plano de tratamento de alta performance para você.
            Nesse momento, orientamos a respeito dos gatilhos do Melasma, como
            cuidar da sua pele e manter os resultados obtidos.
          </p>
        </article>
      </section>
    </main>
  );
};

export default Main;
