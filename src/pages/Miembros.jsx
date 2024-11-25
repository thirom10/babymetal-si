import React, { useState } from 'react';
import data from '../miembros.json';
import './css/Miembros.css';

const Miembros = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [activeAlbum, setActiveAlbum] = useState({});

    const handleTabClick = (id) => {
        setActiveTab(id);
        setActiveAlbum(data[id]?.albums[0] || {});
    };

    const handleAlbumClick = (album) => {
        setActiveAlbum(album);
    };

    return (
        <main className='container-miembros'>
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
                            <div className='album-tabs'>
                                <div>
                                    <h4 className="accordion-item__label">{member.nombre}</h4>
                                </div>
                                <div className="albums">
                                    {member.albums.map((album, i) => (
                                        <button
                                            key={i}
                                            className={`album-tab ${activeAlbum?.nombre === album.nombre ? "active" : ""}`}
                                            onClick={() => handleAlbumClick(album)}
                                        >
                                            {album.nombre}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="accordion-item__container">
                                <div className='acordion-info'>
                                    <div>
                                        <p><strong>Edad:</strong> {member.edad}</p>
                                        <p><strong>Nacionalidad:</strong> {member.nacionalidad}</p>
                                        <p><strong>Fecha de Nacimiento:</strong> {member.fecha_nacimiento}</p>
                                        <p><strong>Altura:</strong> {member.altura}</p>
                                    </div>
                                    <div>
                                        {activeAlbum && (
                                            <div className="album-content">
                                                <h5>{activeAlbum.nombre}</h5>
                                                <img
                                                    src={activeAlbum.imagen_album}
                                                    alt={activeAlbum.nombre}
                                                />
                                                <p>{activeAlbum.descripcion}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>

                            </div>
                        </article>
                    ))}
                </section>
            </section>
        </main>
    );
};

export default Miembros;
