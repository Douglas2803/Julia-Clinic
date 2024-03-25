import React from "react";

import "./style.scss";

function ContentSection() {
  return (
    <>
      <section>
        <article className="content">
          <h2>Como Funciona?</h2>
          <p>
            O protocolo tem como principal objetivo renovar a primeira camada da
            pele com manchas. A fórmula do protocolo foi desenvolvida
            exclusivamente para o Melasma. Promovendo segurança e resultado no
            seu tratamento. Além de tratar Melasma. Pode ser aplicado em manchas
            de acne, sardas e manchas de sol.
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
