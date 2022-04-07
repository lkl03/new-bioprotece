import React, { useState } from 'react'
import { FaFacebookF, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { send } from 'emailjs-com';


const SixthSection = () => {

    for (const i = 0; i > 2; i++) {
        console.log(i);
    };

    const [toSend, setToSend] = useState({
        from_name: '',
        from_email: '',
        from_tel: '',
        message: '',
    });

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    const formSent = (e) => {
        e.preventDefault()
        nombre && telefono && email && mensaje ? toast.success("Formulario enviado exitosamente") : '';

        send(
            'service_uvrpu6s',
            'template_vv257zk',
            toSend,
            'HuKLm0nm0U_Wz-vBr'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setToSend({
                    from_name: '',
                    from_email: '',
                    from_tel: '',
                    message: '',
                })
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    }

    return (
        <div style={{background: 'linear-gradient(60.7deg, #1348c4 -1.81%, #0188d3 73.84%)', boxShadow: 'inset 0px -33px 25px rgba(64, 64, 64, 0.2)'}}>
            <div id='contactanos' className='sixthContainer'>
                <div className='sixthContainer_left'>
                    <h3 className='sixthContainer_left-sectionTitle'>Contactarse con Bioprotece</h3>

                    <ul className='sixthContainer_left-sectionData'>
                        <li className='sixthContainer_left-sectionData-icon'>
                            <FaEnvelope />
                            <a href='mailto:consultas@bioprotece.com?Subject=Consulta Web'>consultas@bioprotece.com</a>
                        </li>
                        <li className='sixthContainer_left-sectionData-icon mobile'>
                            <FaEnvelope />
                            <a href='mailto:consultas@bioprotece.com?Subject=Consulta Web'>consultas@bioprotece.com</a>
                        </li>
                        <li className='sixthContainer_left-sectionData-icon'>
                            <FaPhoneAlt />
                            <a href='tel:+54 9 11 4767-5822'>(054-11) 4767-5822</a>
                        </li>
                        <li className='sixthContainer_left-sectionData-icon'>
                            <FaMapMarkerAlt />
                            <a href='https://goo.gl/maps/TvJ2KKDTcuSX1mnC7' target='blank'>Vicente López 4334, Villa Ballester</a>
                        </li>
                    </ul>
                    <ul className='sixthContainer_left-sectionSocial'>
                        <li className='sixthContainer_left-sectionSocial-icon'>
                            <a href="https://www.facebook.com/Bioprotece/" target='blank'>
                                <FaFacebookF />
                            </a>
                        </li>
                        <li className='sixthContainer_left-sectionSocial-icon'>
                            <a href="https://ar.linkedin.com/company/bioprotece-sa" target='blank'>
                                <FaLinkedin />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='sixthContainer_right'>
                    <div className='sixthContainer_right-form'>
                        <form id='contact-form' onSubmit={formSent}>
                            <label htmlFor='nombre'>Nombre</label>
                            <input type="text" id='nombre' name='from_name' value={toSend.from_name} onChange={handleChange} required />
                            <label htmlFor='email'>Email</label>
                            <input type="email" id='email' name='from_email' value={toSend.from_email} onChange={handleChange} required />
                            <label htmlFor='telefono'>Teléfono</label>
                            <input type="text" id='telefono' name='from_tel' value={toSend.from_tel} onChange={handleChange} required />
                            <label htmlFor='mensaje'>Mensaje</label>
                            <textarea id='mensaje' name='message' value={toSend.message} onChange={handleChange} required />
                            <button>Enviar</button>
                        </form>
                        <ToastContainer />
                    </div>
                    <div style={{ marginLeft: '1rem', width: '100%' }}>
                        <ul className='sixthContainer_left-sectionData'>
                            <li className='sixthContainer_left-sectionData-icon mobile'>
                                <FaMapMarkerAlt />
                                <a href='https://goo.gl/maps/TvJ2KKDTcuSX1mnC7' target='blank'>Vicente López 4334, Villa Ballester</a>
                            </li>
                        </ul>
                    </div>
                    <div className='sixthContainer_right-map'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2762.903823593067!2d-58.56835596888114!3d-34.562039344191994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb9ef94dac78d%3A0xb024bb6cf6b44b33!2sVicente%20L%C3%B3pez%204334%2C%20Villa%20Ballester%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1sen!2sar!4v1646240347728!5m2!1sen!2sar" width="100%" height="400" allowFullScreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SixthSection