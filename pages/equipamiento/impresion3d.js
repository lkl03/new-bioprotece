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
                            <Imagen src='/img/equipamiento/maquinas/epm260-render.webp' />
                        </ImgMachine>

                        <Text>
                            <Title>Impresora 3D de Metal</Title>
                            <Desc className="desc">
                                La <Model className="ep">EP-M260 </Model>
                                es una impresora 3D de metal de grado industrial que utiliza tecnología avanzada de metal powder bed fusion (MPBF). Es capaz de convertir fácil y rápidamente datos CAD en piezas metálicas de estructura compleja de alto rendimiento.
                            </Desc>
                        </Text>
                    </Grid>
                    <ScrollMachine path='details' color='rgb(27, 99, 255)' />
                </MachineSection>

                <MachineDetails id='details'>
                    <YtContent>
                        <VTitle>EP-M260 en profundidad</VTitle>
                        <Yt
                            width="1232"
                            height="693"
                            src='https://www.youtube.com/embed/C5og9lYeN2k'
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
