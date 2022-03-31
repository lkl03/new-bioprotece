import React, { useState, useEffect } from 'react'
import { ListaPlus, ListaNormal } from "../../../components/Equipamiento/Lists/ListFijacion";
import {
  ProductSection,
  Container,
  Title,
  Cards,
  Card,
  CardPlus,
  CardBody,
  ImgCard,
  TitleCard,
  PCard,
  Miembro,
  MedH3,
  IntroMedContainer,
  MedDesc,
  ContainerFirst,
  ContainerFirstTexto,
  ContainerFirstImg,
  ContainerSecond,
  ContainerSecondTexto,
  ContainerSecondImg,
  Gallery,
  GalleryItem
} from "../../../styles/StyledProducts"
import Link from "next/link";
import ScrollArrow from "../../../components/Generales/ScrollArrow";
import Nav from '../../../components/Navbar/Nav'
import { db } from '../../../public/config'
import { onSnapshot, collection, query } from 'firebase/firestore';

const categoria = "implantes a medida";

const Cadera = () => {

  const [data, setData] = useState([])
    useEffect(() => {
        const q = query(collection(db, 'images'))
        const f = onSnapshot(q, (querySnapshot) => {
            setData(querySnapshot.docs.map(doc => doc.data()))
        });
    }, [])

  return (
    <>
      <Nav />
      <ProductSection>
        <Title>{categoria}</Title>

        <Container>
            <IntroMedContainer>
              <MedDesc>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore porro, assumenda iure odio molestiae vero nesciunt quis quaerat, praesentium ipsa sapiente, repudiandae expedita adipisci consequuntur aliquid dolores. Libero, cumque accusamus.</MedDesc>
                <ContainerFirst>
                    <ContainerFirstTexto>
                        <MedH3>Impresión 3D</MedH3>
                        <p>Fabricamos implantes médicos de estructura compleja combinando las tecnologías CAD (diseño asistido por computadora) y MPBF (fusión de polvo metálico en una cama de impresión). De esta manera, los implantes están diseñados a medida de cada paciente.</p>
                    </ContainerFirstTexto>
                    <ContainerFirstImg src="/img/productos/implantes-a-medida/additive1.svg" alt="" />
                </ContainerFirst>
                <ContainerSecond>
                    <ContainerSecondTexto>
                        <MedH3>Estructura trabecular</MedH3>
                        <p>Trabajamos con nuestra propia estructura trabecular biocompatible, que favorece a la osteointegración del implante con los huesos del cuerpo humano, además de hacer que los implantes sean más resistentes y livianos.</p>
                    </ContainerSecondTexto>
                    <ContainerSecondImg src="/img/productos/implantes-a-medida/additive2.svg" alt="" />
                </ContainerSecond>
            </IntroMedContainer>
        </Container>
        <Title>craneoplastía</Title>
        <Container>
          <IntroMedContainer>
            <MedDesc>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore porro, assumenda iure odio molestiae vero nesciunt quis quaerat, praesentium ipsa sapiente, repudiandae expedita adipisci consequuntur aliquid dolores. Libero, cumque accusamus.</MedDesc>
          </IntroMedContainer>
        </Container>
        <Title>Nuestros Implantes</Title>
        <Container>
          <IntroMedContainer>
            <MedDesc>Algunos de nuestros implantes a medida impresos en titanio con estructura trabecular</MedDesc>
            <Gallery>
                {data.map(({ id, imageUrl, category, title, agregado }) => 
                    <GalleryItem key={id} style={{backgroundImage: `url(${imageUrl})`}}>
                        {/*<img src={imageUrl}></img>*/}
                    </GalleryItem>
                )}
            </Gallery>
          </IntroMedContainer>
        </Container>


        <ScrollArrow />
      </ProductSection>
    </>
  );
};

export default Cadera;
