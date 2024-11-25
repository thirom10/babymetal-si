import React, { useState } from 'react';
import data from '../miembros.json';
import './css/Miembros.css';
const Miembros = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (id) => {
        setActiveTab(id);
    };

    return (
        <section className="accordion">
            <section className="accordion-tabs">
                {data.map((member, index) => (
                    <button
                        key={index}
                        className={`accordion-tab ${activeTab === index ? "accordion-active" : ""}`}
                        onClick={() => handleTabClick(index)}
                    >
                        {member.nombre}
                    </button>
                ))}
            </section>
            <section className="accordion-content">
                {data.map((member, index) => (
                    <article
                        key={index}
                        className={`accordion-item ${activeTab === index ? "accordion-active" : ""}`}
                    >
                        <h4 className="accordion-item__label">{member.nombre}</h4>
                        <div className="accordion-item__container">
                            <p><strong>Edad:</strong> {member.edad}</p>
                            <p><strong>Nacionalidad:</strong> {member.nacionalidad}</p>
                            <p><strong>Fecha de Nacimiento:</strong> {member.fecha_nacimiento}</p>
                            <p><strong>Tiempo en la banda:</strong> {member.tiempo}</p>
                            <p><strong>Altura:</strong> {member.altura}</p>
                            <img src={member.imagen} alt={member.nombre} />
                        </div>
                    </article>
                ))}
            </section>
        </section>
    );
};

export default Miembros;
