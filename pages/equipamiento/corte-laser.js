import React from "react";
import ScrollArrow from '../../components/Generales/ScrollArrow'
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


const Machine = () => {
    return (
        <>
            <Nav />
            <BodyContainer>

                <MachineSection>
                    <Grid>
                        <ImgMachine>
                            <Imagen src='/img/equipamiento/maquinas/laserrender.webp' />
                        </ImgMachine>

                        <Text>
                            <Title>Máquina de corte láser</Title>
                            <Desc className="desc">
                                La cortadora láser de fibra óptica <Model className="ep">SF1313G </Model>
                                adopta el sistema de control numérico Olsen Dicko. Tiene hardware perfecto, CAM potente, algoritmo excelente, flight cutting, compensación de precisión mecánica y muchas otras funciones.
                            </Desc>
                        </Text>
                    </Grid>
                    <ScrollMachine path='details' color='rgb(27, 99, 255)' />
                </MachineSection>

                <MachineDetails id='details'>
                    <YtContent>
                        <VTitle>SF1313G en profundidad</VTitle>
                        <Yt
                            width="1232"
                            height="693"
                            src='https://www.youtube.com/embed/Cq0G-uO752s'
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
