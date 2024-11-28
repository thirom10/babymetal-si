import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
                        <motion.button
                            key={index}
                            className={`accordion-tab ${activeTab === index ? "accordion-active" : ""}`}
                            onClick={() => handleTabClick(index)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {member.nombre}
                        </motion.button>
                    ))}
                </section>
                <section className="accordion-content">
                    {data.map((member, index) => (
                        <motion.article
                            key={index}
                            className={`accordion-item ${activeTab === index ? "accordion-active" : ""}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: activeTab === index ? 1 : 0, y: activeTab === index ? 0 : 20 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className='album-tabs'>
                                <div>
                                    <h4 className="accordion-item__label">{member.nombre}</h4>
                                </div>
                                <div className="albums">
                                    {member.albums.map((album, i) => (
                                        <motion.button
                                            key={i}
                                            className={`album-tab ${activeAlbum?.nombre === album.nombre ? "active" : ""}`}
                                            onClick={() => handleAlbumClick(album)}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {album.nombre}
                                        </motion.button>
                                    ))}
                                </div>
                            </div>
                            <motion.div
                                className="accordion-item__container"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                            >
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
                                                <motion.img
                                                    src={activeAlbum.imagen_album}
                                                    alt={activeAlbum.nombre}
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.4 }}
                                                />
                                                <p>{activeAlbum.descripcion}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.article>
                    ))}
                </section>
            </section>
        </main>
    );
};

export default Miembros;
