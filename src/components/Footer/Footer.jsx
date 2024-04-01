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
        <h1>Institucional</h1>
        <div className="about">
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
              <li>Sobre nós</li>
            </ul>
          </div>
        </div>
        <div>
          <h1>Localização</h1>
          <Map />
        </div>
        <div className="sub-header">
          <p>Douglas Desenvolvimento</p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
