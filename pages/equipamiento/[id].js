import React from "react";
import { useRouter } from "next/router";
import ScrollArrow from '../../components/Generales/ScrollArrow'
import { EquipoListPlus } from "../../components/Equipamiento/EquipoList";
import {
  MachineSection,
  Grid,
  ImgMachine,
  Imagen,
  Text,
  Title,
  Desc,
  Model,
  MachineDetails,
  YtContent,
  VTitle,
  Yt,
  BodyContainer
} from "../../styles/StyledId"
import ScrollMachine from "../../components/Generales/ScrollMachine";
import ContactTo from '../../components/Generales/ContactTo'
import Nav from '../../components/Navbar/Nav'


const Machine = (props) => {
  const router = useRouter();

  const equipo = EquipoListPlus.find((item) => item.id === router.query.id);

  const { title2, modelo, render, p, video, pmodelo } = equipo || "";
  return (
    <>
      <Nav />
      <BodyContainer>

        <MachineSection>
          <Grid>
            <ImgMachine>
              <Imagen src={render} />
            </ImgMachine>

            <Text>
              <Title>{title2}</Title>
              <Desc className="desc">
                La {pmodelo} <Model className="ep">{modelo} </Model>
                {p}
              </Desc>
            </Text>
          </Grid>
          <ScrollMachine path='details' color='rgb(27, 99, 255)' />
        </MachineSection>

        <MachineDetails id='details'>
          <YtContent>
            <VTitle>{modelo} en profundidad</VTitle>
            <Yt
              width="1232"
              height="693"
              src={video}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></Yt>
          </YtContent>

          <ScrollArrow />
          <ContactTo />
        </MachineDetails>
      </BodyContainer>
    </>
  );
};

export default Machine;
