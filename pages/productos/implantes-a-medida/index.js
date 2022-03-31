import React, {useState, useEffect} from 'react'
import { db } from '../../../public/config'
import { onSnapshot, collection, query } from 'firebase/firestore';
import NavProd from '../../../components/Navbar/NavProd'

const index = () => {
  
  const [data, setData] = useState([])
    useEffect(() => {
        const q = query(collection(db, 'images'))
        const f = onSnapshot(q, (querySnapshot) => {
            setData(querySnapshot.docs.map(doc => doc.data()))
        });
    }, [])
  
  return (
    <>
    <NavProd />
    <div className='impContainer'>
      <div className='impContainer-titlendesc'>
        <h3>Implantes a medida</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  Ex nam quis dignissimos reiciendis nemo totam laboriosam commodi pariatur, <br /> recusandae sint illo provident, ipsa similique dolorem, voluptatibus in eligendi esse facere!</p>
      </div>
      <div className='impContainer-firstRow'>
        <div className='impContainer-firstRow--text'>
          <h4>Impresión 3D</h4>
          <p>Fabricamos implantes médicos de estructura compleja combinando <br /> las tecnologías CAD (diseño asistido por computadora) <br /> y MPBF (fusión de polvo metálico en una cama de impresión). <br /> De esta manera, los implantes están diseñados a medida de cada paciente.</p>
        </div>
        <div className='impContainer-firstRow--img'>
          <img src="/img/productos/implantes-a-medida/additive1.svg" alt="" />
        </div>
      </div>
      <div className='impContainer-secondRow'>
        <div className='impContainer-secondRow--text'>
          <h4>Estructura trabecular</h4>
          <p>Trabajamos con nuestra propia estructura trabecular biocompatible, <br /> que favorece a la osteointegración del implante con los huesos del cuerpo humano,  <br /> además de hacer que los implantes sean más resistentes y livianos.</p>
        </div>
        <div className='impContainer-secondRow--img'>
          <img src="/img/productos/implantes-a-medida/additive2.svg" alt="" />
        </div>
      </div>
      <div className='impContainer-titlendesc'>
        <h3>Craneoplastía</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nam quis dignissimos reiciendis nemo totam laboriosam commodi pariatur, recusandae sint illo provident, ipsa similique dolorem, voluptatibus in eligendi esse facere!</p>
      </div>
      <div className='impContainer-titlendesc'>
        <h3>Nuestros implantes</h3>
        <p>Algunos de nuestros implantes a medida impresos en titanio con estructura trabecular</p>
      </div>
      <div className="gallery">
        {data.map(({ id, imageUrl, category, title, agregado }) => 
          <div key={id} className="gallery_item" style={{backgroundImage: `url(${imageUrl})`}}>
            {/*<img src={imageUrl}></img>*/}
          </div>
        )}
      </div>
    </div>
    </>
  )
}

export default index



