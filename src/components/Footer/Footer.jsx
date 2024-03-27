import React from "react";
import "./style.scss";

function Footer() {
  return (
    <footer>
      <aside>
        <div>Logo Clinica</div>
      </aside>
      <section>
        <h3>Institucional</h3>
        <ul>
          <li>Sobre nós</li>
          <li>WhatsApp</li>
          <li>Instagram</li>
          <li>Facebook</li>
        </ul>
        <h3>Localização</h3>
        <div className="sub-header">Douglas Desenvolvimento</div>
      </section>
    </footer>
  );
}

export default Footer;
