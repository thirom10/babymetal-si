import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './css/Contacto.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.message) {
            toast.error('Por favor, completa todos los campos.', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                draggable: true,
                theme: "dark",
            });
            return;
        }

        toast.success('Formulario enviado con éxito.', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            draggable: true,
            theme: "colored",
        });

        setFormData({ name: '', message: '' });
    };

    return (
        <main className='container-contacto'>
            <div className="contact-container">
                <h1>Contacto</h1>
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Nombre:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Escribe tu nombre"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Mensaje:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Escribe tu mensaje"
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-button">Enviar</button>
                </form>
                <ToastContainer />
            </div>
        </main>
    );
};

export default Contact;
