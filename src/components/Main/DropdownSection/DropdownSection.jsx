import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./style.scss";

function DropdownSection() {
  const [openDropdownIndex, setopenDropdownIndex] = useState(null);

  const toggleDropdown = (index) => {
    setopenDropdownIndex(index === openDropdownIndex ? null : index);
  };

  const dropdownItems = [
    {
      buttonText: "Acompanhamento durante e pós protocolo",
      paragraphText:
        "Oferecemos instruções durante todo o tratamento ( durante 4 meses) . Enfatizamos que o melasma não tem cura, mas tem controle; os cuidados devem ser mantidos após a revisão.",
    },
    {
      buttonText: "Quanto tempo leva a sessão?",
      paragraphText: "De 1 a 2 horas .",
    },
    {
      buttonText: "O Protocolo Melasma 360° é dolorido?",
      paragraphText:
        "A sensibilidade a dor é particular de cada pessoa. A pele pode apresentar descamação e leve vermelhidão nos primeiros 4 dias. No entanto, pelos relatos de nossas pacientes ,é possível realizar o protocolo sem queixas de dor. ",
    },
    {
      buttonText: "O resultado é permanente?",
      paragraphText:
        "Por se tratar de uma dermatose crônica, o Melasma não tem cura. A manutenção deve ser realizada no períodos de 6 meses. ",
    },
  ];

  return (
    <>
      <section>
        <ul className="dropdown" id="acompanhamento">
          {dropdownItems.map((item, index) => (
            <li className="dropdown-item" key={index}>
              <button onClick={() => toggleDropdown(index)}>
                <IoIosArrowDown className="arrows" />
                <h1 className="drop-title">{item.buttonText}</h1>
              </button>
              {openDropdownIndex === index && (
                <p className="dropdown-content">{item.paragraphText}</p>
              )}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default DropdownSection;
