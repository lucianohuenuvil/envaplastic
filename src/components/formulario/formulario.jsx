"use client"

import { useState } from "react";

export function Formulario() {
    const [formData, setFormData] = useState({
        nombre: "",
        // apellido: "",
        // empresa: "",
        // asunto: "",
        numeroContacto: "",
        // direccion: "",
        email: "",
        message: ""
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const validate = () => {
        let formErrors = {};

        // Validaciones del campo nombre
        if (!formData.nombre.trim()) {
            formErrors.nombre = "El nombre es requerido";
        } else if (formData.nombre.length < 3) {
            formErrors.nombre = "El nombre debe tener al menos 3 caracteres";
        }

        // Validaciones del campo apellido
        // if (!formData.apellido.trim()) {
        //     formErrors.apellido = "El apellido es requerido";
        // } else if (formData.apellido.length < 3) {
        //     formErrors.apellido = "El apellido debe tener al menos 3 caracteres";
        // }

        // Validación del campo asunto
        // if (!formData.asunto.trim()) {
        //     formErrors.asunto = "El asunto es requerido";
        // }

        // Validación del campo número de contacto
        if (!formData.numeroContacto.trim()) {
            formErrors.numeroContacto = "El número de contacto es requerido";
        } else if (!/^\d+$/.test(formData.numeroContacto)) {
            formErrors.numeroContacto = "El número de contacto debe ser numérico";
        } else if (formData.numeroContacto.length < 8 || formData.numeroContacto.length > 12) {
            formErrors.numeroContacto = "El número de contacto debe tener entre 8 y 12 dígitos";
        }

        // Validación del campo dirección
        // if (!formData.direccion.trim()) {
        //     formErrors.direccion = "La dirección es requerida";
        // }

        // Validación del correo electrónico
        if (!formData.email.trim()) {
            formErrors.email = "El correo electrónico es requerido";
        } else if (!formData.email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
            formErrors.email = "Correo electrónico inválido";
        }

        // Validación del mensaje
        if (!formData.message.trim()) {
            formErrors.message = "El mensaje es requerido";
        } else if (formData.message.length < 10) {
            formErrors.message = "El mensaje debe tener al menos 10 caracteres";
        }

        return formErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formErrors = validate();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            setSuccessMessage(""); // 
        } else {
            setErrors({});
            // Enviar la solicitud
            try {
                const formPayload = new FormData();
                formPayload.append('nombre', formData.nombre);
                formPayload.append('numeroContacto', formData.numeroContacto);
                formPayload.append('email', formData.email);
                formPayload.append('message', formData.message);

                const response = await fetch("https://envaplastic.cl/sendMail.php", {
                    method: "POST",
                    body: formPayload,
                });

                const result = await response.text(); // o response.json() si el PHP devuelve un JSON

                if (response.ok) {
                    setSuccessMessage("¡Mensaje enviado exitosamente!");
                    // Reiniciar el formulario si es necesario
                    setFormData({
                        nombre: "",
                        numeroContacto: "",
                        email: "",
                        message: ""
                    });
                } else {
                    setSuccessMessage("Hubo un problema al enviar el mensaje. Inténtalo de nuevo.");
                }

            } catch (error) {
                console.error("Error al enviar el formulario:", error);
                setSuccessMessage("Hubo un problema al enviar el mensaje. Inténtalo de nuevo.");
            }
        }
    };

    return (
        <section className="mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl text-black font-bold mb-4">Contáctanos</h2>
            <form id="#formularioContacto" onSubmit={handleSubmit}>
                {/* <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-gray-700">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            className={`border text-sm rounded-lg block w-full p-2.5 ${errors.nombre ? 'border-red-500' : 'border-gray-300'}`}
                            placeholder="Nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                        />
                        {errors.nombre && <span className="text-red-500 text-sm">{errors.nombre}</span>}
                    </div>
                    
                    <div>
                        <label htmlFor="apellido" className="block mb-2 text-sm font-medium text-gray-700">Apellido</label>
                        <input
                            type="text"
                            id="apellido"
                            className={`border text-sm rounded-lg block w-full p-2.5 ${errors.apellido ? 'border-red-500' : 'border-gray-300'}`}
                            placeholder="Apellido"
                            value={formData.apellido}
                            onChange={handleChange}
                        />
                        {errors.apellido && <span className="text-red-500 text-sm">{errors.apellido}</span>}
                    </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="empresa" className="block mb-2 text-sm font-medium text-gray-700">Empresa</label>
                        <input
                            type="text"
                            id="empresa"
                            className={`border text-sm rounded-lg block w-full p-2.5 ${errors.empresa ? 'border-red-500' : 'border-gray-300'}`}
                            placeholder="Opcional"
                            value={formData.empresa}
                            onChange={handleChange}
                        />
                        {errors.empresa && <span className="text-red-500 text-sm">{errors.empresa}</span>}
                    </div>

                    <div>
                        <label htmlFor="asunto" className="block mb-2 text-sm font-medium text-gray-700">Asunto</label>
                        <input
                            type="text"
                            id="asunto"
                            className={`border text-sm rounded-lg block w-full p-2.5 ${errors.asunto ? 'border-red-500' : 'border-gray-300'}`}
                            placeholder="Asunto"
                            value={formData.asunto}
                            onChange={handleChange}
                        />
                        {errors.asunto && <span className="text-red-500 text-sm">{errors.asunto}</span>}
                    </div>
                </div> */}

                <div className="mt-4">
                    <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-gray-700">Nombre (*)</label>
                    <input
                        type="text"
                        id="nombre"
                        className={`border text-sm rounded-lg block w-full p-2.5 ${errors.nombre ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="Nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                    />
                    {errors.nombre && <span className="text-red-500 text-sm">{errors.nombre}</span>}
                </div>

                <div className="mt-4">
                    <label htmlFor="numero" className="block mb-2 text-sm font-medium text-gray-700">Teléfono (*)</label>
                    <input
                        type="text"
                        id="numeroContacto"
                        className={`border text-sm rounded-lg block w-full p-2.5 ${errors.numeroContacto ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="Teléfono de contacto"
                        value={formData.numeroContacto}
                        onChange={handleChange}
                    />
                    {errors.numeroContacto && <span className="text-red-500 text-sm">{errors.numeroContacto}</span>}
                </div>

                <div className="mt-4">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Correo electrónico (*)</label>
                    <input
                        type="email"
                        id="email"
                        className={`border text-sm rounded-lg block w-full p-2.5 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="name@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                </div>

                <div className="mt-4">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">Mensaje (*)</label>
                    <textarea
                        id="message"
                        rows="4"
                        className={`border text-sm rounded-lg block w-full p-2.5 ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="Escribe un mensaje..."
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                    {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
                </div>

                <button
                    type="submit"
                    className="mt-6 w-full bg-blue-600 text-white font-bold py-2.5 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
                >
                    Enviar
                </button>

                {successMessage && <div className="success-message">{successMessage}</div>} {/* Mensaje de éxito */}
            </form>
        </section>
    );
}
