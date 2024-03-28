import React from "react";
import "./style.scss";

function Footer() {
  return (
    <footer>
      <aside>
        <div className="logo"></div>
      </aside>
      <section className="section-footer">
        <div className="about">
          <h1>Institucional</h1>
          <ul>
            <li>Sobre nós</li>
            <li>WhatsApp</li>
            <li>Instagram</li>
            <li>Facebook</li>
          </ul>
        </div>
        <div>
          <h1>Localização</h1>
        </div>
        <div className="sub-header">Douglas Desenvolvimento</div>
      </section>
    </footer>
  );
}

export default Footer;
