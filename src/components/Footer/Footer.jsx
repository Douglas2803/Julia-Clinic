import React from "react";
import Map from "./Map/Map";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";

import "./style.scss";

function Footer() {
  return (
    <footer>
      <section className="section-footer">
        <aside>
          <div className="logo"></div>
        </aside>
        <div className="about-all">
          <div className="about">
            <div className="about-sub">
              <h1>Institucional</h1>
              <div className="about-sub-social">
                <div className="social">
                  <ul>
                    <li>
                      <a href="https://api.whatsapp.com/send?phone=5554999977894">
                        <FaWhatsapp />
                        WhatsApp
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/drajuliavargas?igsh=MWVzM2dzdzJxdTV0aw==">
                        <FaInstagram />
                        Instagram
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="about-us">
                  <ul>
                    <li>
                      <a href="#">Sobre nós</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="map-container">
            <h1>Localização</h1>
            <div className="location">
              <p>
                Nossa clínica, localizada no edifício corporativo X NOME ao lado
                do banco Banrisul, no centro da cidade de Caxias do Sul, foi
                projetada para oferecer atendimento de qualidade em um ambiente
                confortável. Estamos próximos ao Camelódromo e Praça da
                Bandeira.
              </p>
              <Map className="map" />
            </div>
          </div>
        </div>
        <div className="sub-header">
          <p>Douglas Desenvolvimento</p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
