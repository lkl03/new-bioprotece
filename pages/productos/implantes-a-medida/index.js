import React, {useState, useEffect} from 'react'
import { db } from '../../../public/config'
import { onSnapshot, collection, query, where, getDocs } from 'firebase/firestore';
import NavProd from '../../../components/Navbar/NavProd'
import Link from 'next/link'

const index = () => {
  
  const [data, setData] = useState([])
    useEffect(() => {
        const q = query(collection(db, 'images'))
        const f = onSnapshot(q, (querySnapshot) => {
            setData(querySnapshot.docs.map(doc => doc.data()))
        });
    }, [])

  const [expand, setExpand] = useState(false)

  const [clickedAll, setClickedAll] = useState(false)
  const [clickedFirst, setClickedFirst] = useState(false)
  const [clickedSecond, setClickedSecond] = useState(false)
  const [clickedThird, setClickedThird] = useState(false)


//functions to filter products
  function showAllItems () {
    if (clickedFirst == true || clickedSecond == true || clickedThird == true) {
      setClickedAll(true)
    }
    setClickedFirst(false)
    setClickedSecond(false)
    setClickedThird(false)
    const q = query(collection(db, 'images'))
        const f = onSnapshot(q, (querySnapshot) => {
            setData(querySnapshot.docs.map(doc => doc.data()))
        });
  }

  function firstFilter (value) {
    setClickedFirst(!clickedFirst)
    setClickedAll(false)
    setClickedSecond(false)
    setClickedThird(false)
    if(clickedFirst == false) {
      const q = query(collection(db, 'images'), where("category", "==", value))
      const f = onSnapshot(q, (querySnapshot) => {
          setData(querySnapshot.docs.map(doc => doc.data()))
      });
    }else{
      const q = query(collection(db, 'images'))
      const f = onSnapshot(q, (querySnapshot) => {
          setData(querySnapshot.docs.map(doc => doc.data()))
      });
    }
  }

  function secondFilter (value) {
    setClickedSecond(!clickedSecond)
    setClickedAll(false)
    setClickedThird(false)
    setClickedFirst(false)
    if(clickedSecond == false) {
      const q = query(collection(db, 'images'), where("category", "==", value))
      const f = onSnapshot(q, (querySnapshot) => {
          setData(querySnapshot.docs.map(doc => doc.data()))
      });
    }else{
      const q = query(collection(db, 'images'))
      const f = onSnapshot(q, (querySnapshot) => {
          setData(querySnapshot.docs.map(doc => doc.data()))
      });
    }
  }

  function thirdFilter (value) {
    setClickedThird(!clickedThird)
    setClickedAll(false)
    setClickedSecond(false)
    setClickedFirst(false)
    if(clickedThird == false) {
      const q = query(collection(db, 'images'), where("category", "==", value))
      const f = onSnapshot(q, (querySnapshot) => {
          setData(querySnapshot.docs.map(doc => doc.data()))
      });
    }else{
      const q = query(collection(db, 'images'))
      const f = onSnapshot(q, (querySnapshot) => {
          setData(querySnapshot.docs.map(doc => doc.data()))
      });
    }
  }

  
  return (
    <>
    <NavProd />
    <div className='impContainer'>
      <div className='impContainer-titlendesc'>
        <h3>Implantes a medida</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  Ex nam quis dignissimos reiciendis nemo totam laboriosam commodi pariatur, recusandae sint illo provident, ipsa similique dolorem, voluptatibus in eligendi esse facere!</p>
      </div>
      <div className='impContainer-firstRow'>
        <div className='impContainer-firstRow--text'>
          <h4>Impresión 3D</h4>
          <p>Fabricamos implantes médicos de estructura compleja combinando las tecnologías CAD (diseño asistido por computadora) y MPBF (fusión de polvo metálico en una cama de impresión). De esta manera, los implantes están diseñados a medida de cada paciente.</p>
        </div>
        <div className='impContainer-firstRow--img'>
          <img src="/img/productos/implantes-a-medida/additive1.svg" alt="" />
        </div>
      </div>
      <div className='impContainer-secondRow'>
        <div className='impContainer-secondRow--text'>
          <h4>Estructura trabecular</h4>
          <p>Trabajamos con nuestra propia estructura trabecular biocompatible, que favorece a la osteointegración del implante con los huesos del cuerpo humano, además de hacer que los implantes sean más resistentes y livianos.</p>
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
      <div className="buttons">
        <button className='buttons_button' onClick={()=> showAllItems()} style={{backgroundColor: clickedAll ? '#1348C4' : '#06C1A0'}}>
        Todos
        </button>
        <button className='buttons_button' onClick={()=> firstFilter('Miembro Inferior')} style={{backgroundColor: clickedFirst ? '#1348C4' : '#06C1A0'}}>
        Miembro Inferior
        </button>
        <button className='buttons_button' onClick={()=> secondFilter('Craneo')} style={{backgroundColor: clickedSecond ? '#1348C4' : '#06C1A0'}}>
        Cráneo
        </button>
        <button className='buttons_button' onClick={()=> thirdFilter('Columna')} style={{backgroundColor: clickedThird ? '#1348C4' : '#06C1A0'}}>
        Columna
        </button>
      </div>
      <div className="gallery">
        {data.map(({ id, e, imageUrl, category, title, agregado }) => 
          <div key={id} className="gallery_item" style={{backgroundImage: `url(${imageUrl})`}} onClick={() => console.log(id)}>
            <div className='gallery_item-img'>
              <div style={{display: expand ? 'block' : 'none'}}>
                <Link href="">
                  <a>
                    <img src={imageUrl} alt={imageUrl} />
                  </a>
                </Link>
              </div>
            </div>
            <div className="gallery_item-text">
              <p>{title}</p>
              <p>{category}</p>
              <img src={imageUrl} alt={imageUrl} />
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  )
}

export default index


