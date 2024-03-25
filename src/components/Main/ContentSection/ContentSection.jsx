import React from "react";

import "./style.scss";

function ContentSection() {
  return (
    <>
      <section>
        <article className="content">
          <h2>Como Funciona?</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem et
            consectetur ducimus quisquam magnam maxime doloremque est pariatur,
            aspernatur quaerat commodi ab ipsa nemo quia quod dignissimos quo
            consequuntur deserunt ?
          </p>
        </article>
        <article className="content">
          <h2>Avaliação : o primeiro passo para iluminar sua pele </h2>
          <p>
            Iniciamos com a consulta personalizada. A avaliação é fundamental
            para traçarmos um plano de tratamento de alta performance para você.
            Nesse momento, orientamos a respeito dos gatilhos do Melasma, como
            cuidar da sua pele e manter os resultados obtidos.
          </p>
        </article>
      </section>
    </>
  );
}

export default ContentSection;
