import { ListaPlus, ListaNormal } from "../../../components/Equipamiento/Lists/Listmini.js";
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
  Miembro
} from "../../../styles/StyledProducts"
import Link from "next/link";
import ScrollArrow from "../../../components/Generales/ScrollArrow";
import Nav from '../../../components/Navbar/Nav'


const categoria = "mini placas";

const Cadera = () => {
  return (
    <>
      <Nav />
      <ProductSection>
        <Title>{categoria}</Title>
        <Miembro>Miembro superior</Miembro>

        <Container>
          <Cards>
            {ListaPlus.map((item, index) => {
              return (
                <>
                  <Link href={`/productos/mini-placas/${item.id}`}>
                    <CardPlus key={index}>
                      <ImgCard
                        src={item.img}
                        alt={`${item.title} Bioprotece`}
                      />

                      <CardBody>
                        <TitleCard>{item.title}</TitleCard>
                        <PCard>{categoria}</PCard>
                      </CardBody>
                    </CardPlus>
                  </Link>
                </>
              );
            })}

            {ListaNormal.map((item, index) => {
              return (
                  <Card key={index}>
                    <ImgCard
                      src={item.img}
                      alt={`${item.title} Bioprotece`}
                    />

                    <CardBody>
                      <TitleCard>{item.title}</TitleCard>
                      <PCard>{categoria}</PCard>
                    </CardBody>
                  </Card>
              );
            })}
          </Cards>
        </Container>

        <ScrollArrow />
      </ProductSection>
    </>
  );
};

export default Cadera;
