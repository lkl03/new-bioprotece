import React, { useState, useEffect } from 'react'
import { db } from '../../../public/config'
import { onSnapshot, collection, query, where, orderBy } from 'firebase/firestore';
import Nav from '../../../components/Navbar/Nav'
import Loader from '../../../components/Generales/Loader';
import { FaEnvelope, FaTimes } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { send } from 'emailjs-com';


const Index = () => {

  const [data, setData] = useState([])
  useEffect(() => {
    const q = query(collection(db, 'images'), orderBy('agregado', 'desc'))
    const f = onSnapshot(q, (querySnapshot) => {
      setData(querySnapshot.docs.map(doc => doc.data()))
      setIsLoading(false)
    });
  }, [])

  const [toSend, setToSend] = useState({
    from_name: '',
    from_email: '',
    from_tel: '',
    message: '',
  });

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const [isLoading, setIsLoading] = useState(true)
  const [formShown, setFormShown] = useState(false)

  const [clickedAll, setClickedAll] = useState(false)
  const [clickedFirst, setClickedFirst] = useState(false)
  const [clickedSecond, setClickedSecond] = useState(false)
  const [clickedThird, setClickedThird] = useState(false)

  //functions to filter products
  function showAllItems() {
    if (clickedFirst == true || clickedSecond == true || clickedThird == true) {
      setClickedAll(true)
    }
    setClickedFirst(false)
    setClickedSecond(false)
    setClickedThird(false)
    const q = query(collection(db, 'images'), orderBy('agregado', 'desc'))
    const f = onSnapshot(q, (querySnapshot) => {
      setData(querySnapshot.docs.map(doc => doc.data()))
    });
  }

  function firstFilter(value) {
    setClickedFirst(!clickedFirst)
    setClickedAll(false)
    setClickedSecond(false)
    setClickedThird(false)
    if (clickedFirst == false) {
      const q = query(collection(db, 'images'), where("category", "==", value), orderBy('agregado', 'desc'))
      const f = onSnapshot(q, (querySnapshot) => {
        setData(querySnapshot.docs.map(doc => doc.data()))
      });
    } else {
      const q = query(collection(db, 'images'), orderBy('agregado', 'desc'))
      const f = onSnapshot(q, (querySnapshot) => {
        setData(querySnapshot.docs.map(doc => doc.data()))
      });
    }
  }

  function secondFilter(value) {
    setClickedSecond(!clickedSecond)
    setClickedAll(false)
    setClickedThird(false)
    setClickedFirst(false)
    if (clickedSecond == false) {
      const q = query(collection(db, 'images'), where("category", "==", value), orderBy('agregado', 'desc'))
      const f = onSnapshot(q, (querySnapshot) => {
        setData(querySnapshot.docs.map(doc => doc.data()))
      });
    } else {
      const q = query(collection(db, 'images'), orderBy('agregado', 'desc'))
      const f = onSnapshot(q, (querySnapshot) => {
        setData(querySnapshot.docs.map(doc => doc.data()))
      });
    }
  }

  function thirdFilter(value) {
    setClickedThird(!clickedThird)
    setClickedAll(false)
    setClickedSecond(false)
    setClickedFirst(false)
    if (clickedThird == false) {
      const q = query(collection(db, 'images'), where("category", "==", value), orderBy('agregado', 'desc'))
      const f = onSnapshot(q, (querySnapshot) => {
        setData(querySnapshot.docs.map(doc => doc.data()))
      });
    } else {
      const q = query(collection(db, 'images'), orderBy('agregado', 'desc'))
      const f = onSnapshot(q, (querySnapshot) => {
        setData(querySnapshot.docs.map(doc => doc.data()))
      });
    }
  }

  const sendForm = (e) => {
    e.preventDefault()
    nombre && telefono && email && mensaje ? toast.success("Gracias por enviarnos tu caso, nos contactaremos a la brevedad") : '';

    send(
      'service_6x5eg3b',
      'template_rkrojes',
      toSend,
      'DA1IVGJwnXqh-LmAF'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setToSend({
          from_name: '',
          from_email: '',
          from_tel: '',
          message: '',
        })
        setFormShown(false)
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });

  }

  return (
    <>
      <ToastContainer></ToastContainer>
      <Nav />
      <div className='impContainer'>
        <div className='impContainer-titlendesc'>
          <h3>Implantes a medida</h3>
          <p>Además del proceso de forjado, también fabricamos implantes a medida de estructura compleja combinando las tecnologías <span>CAD</span> (diseño asistido por computadora), <span>MPBF</span>  (fusión de polvo metálico en una cama de impresión) y <span>FDM</span> (modelado por deposición fundida)</p>
        </div>
        <div className='impContainer-firstRow'>
          <div className='impContainer-firstRow--text'>
            <h4>Impresión 3D en titanio</h4>
            <p>Fabricamos implantes médicos de estructura compleja combinando las tecnologías CAD (diseño asistido por computadora) y MPBF (fusión de polvo metálico en una cama de impresión). De esta manera, los implantes están diseñados a medida de cada paciente.</p>
          </div>
          <div className='impContainer-firstRow--img'>
            <img src="/img/productos/implantes-a-medida/additive1.png" alt="" />
          </div>
        </div>
        <div className='impContainer-secondRow'>
          <div className='impContainer-secondRow--text'>
            <h4>Estructura trabecular</h4>
            <p>Trabajamos con nuestra propia estructura trabecular biocompatible, que favorece a la osteointegración del implante con los huesos del cuerpo humano, además de hacer que los implantes sean más resistentes y livianos.</p>
          </div>
          <div className='impContainer-secondRow--img' id="helpTextShow">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '25rem', height: '12.5rem' }} id='render'>
              <div style={{ width: '100%', height: '100%' }}>
                <iframe style={{ width: '100%', height: '100%' }} src="/img/productos/implantes-a-medida/Cubos/Cubos.html"
                  allowFullScreen
                  frameBorder="0"
                  scrolling="no">
                </iframe>
              </div>
            </div>
            <p id="helpText">Deslizá la imagen para verla en realidad aumentada</p>
          </div>
        </div>
        <div className='impContainer-titlendesc'>
          <h3>Craneoplastía</h3>
          <p>Consiste en levantar las imágenes obtenidas por técnicas de diagnóstico (TAC o MRI) a través de un software, para poder incluir implantes médicos en el modelo del paciente. A partir de ello, desarrollamos el implante en plástico y/o resina.</p>
          <div className="gallery">
            <div className="gallery_item">
              <img src="/img/productos/implantes-a-medida/craneo1.webp" alt="" />
            </div>
            <div className="gallery_item">
              <img src="/img/productos/implantes-a-medida/craneo2.webp" alt="" />
            </div>
            <div className="gallery_item">
              <img src="/img/productos/implantes-a-medida/craneo3.webp" alt="" />
            </div>
          </div>
        </div>
        <div className='impContainer-titlendesc'>
          <h3>Nuestros implantes</h3>
          <p>Algunos de nuestros implantes a medida impresos en titanio con estructura trabecular</p>
        </div>
        <div className="buttons" style={{ display: isLoading ? 'none' : 'flex' }}>
          <button className='buttons_button' onClick={() => showAllItems()} style={{ backgroundColor: clickedAll ? '#1348C4' : '#06C1A0' }}>
            Todos
          </button>
          <button className='buttons_button' onClick={() => firstFilter('Miembro Inferior')} style={{ backgroundColor: clickedFirst ? '#1348C4' : '#06C1A0' }}>
            Miembro Inferior
          </button>
          <button className='buttons_button' onClick={() => secondFilter('Máxilo')} style={{ backgroundColor: clickedSecond ? '#1348C4' : '#06C1A0' }}>
            Máxilo
          </button>
          <button className='buttons_button' onClick={() => thirdFilter('Columna')} style={{ backgroundColor: clickedThird ? '#1348C4' : '#06C1A0' }}>
            Columna
          </button>
        </div>
        {isLoading ? <Loader /> : <div className="gallery">
          {data.map(({ id, imageUrl, category, title, agregado }) =>
            <div id={id} key={id} className="gallery_item" style={{ backgroundImage: `url(${imageUrl})` }}>
              <div className="gallery_item-text">
                <p>{title}</p>
                <p>{category}</p>
                <div className='gallery_item-bg'>
                </div>
              </div>
            </div>
          )}
        </div>}
        <div className='contactCase'>
          <button className="contactCase_button" onClick={() => setFormShown(true)}>
            <div className="contactCase_button-content">
              <FaEnvelope /> Envianos tu caso
            </div>
          </button>
          <div className='contactCase_form' style={{ display: formShown ? 'block' : 'none' }}>
            <FaTimes id='contactCase_form-closer'
              onClick={() => setFormShown(false)}
            />
            <div className="contactCase_form-container">
              <form action="" onSubmit={sendForm}>
                <label htmlFor='nombre'>Nombre</label>
                <input type="text" id='nombre' name='from_name' value={toSend.from_name} onChange={handleChange} required />
                <label htmlFor='email'>Email</label>
                <input type="email" id='email' name='from_email' value={toSend.from_email} onChange={handleChange} required />
                <label htmlFor='telefono'>Teléfono</label>
                <input type="text" id='telefono' name='from_tel' value={toSend.from_tel} onChange={handleChange} required />
                <label htmlFor='mensaje'>Mensaje</label>
                <textarea id='mensaje' name='message' placeholder='Describí tu caso, nos estaremos contactando a la brevedad.' value={toSend.message} onChange={handleChange} required />
                <button>Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index



