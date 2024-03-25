import React, {useState} from "react";
import "./style.scss";

function DropdownSection() {
  const [openDropdownIndex, setopenDropdownIndex] = useState(null);

  const toggleDropdown = (index) => {
    setopenDropdownIndex(index === openDropdownIndex ? null : index);
  };
  return(
  <>
    <section>
      <ul className="dropdown">
        {[0, 1, 2, 3].map((index) => (
          <li className="dropdown-item" key={index}>
            <button onClick={() => toggleDropdown(index)}>informação</button>
            {openDropdownIndex === index && (
              <p className="dropdown-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                vero explicabo voluptatum voluptates sit laudantium optio
                recusandae sapiente culpa eligendi m inus perferendis aspernatur
                nam voluptatem numquam a in, non commodi.
              </p>
            )}
          </li>
        ))}
      </ul>
    </section>
  </>
  );
}

export default DropdownSection;
