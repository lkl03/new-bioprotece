import { ArtroscopiaPlus, ArtroscopiaList} from '../../../components/Equipamiento/Lists/ListArtroscopia'
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


const Artroscopia = () => {
  return (
    <>
      <Nav />
      <ProductSection>
        <Title>Artroscopía</Title>
        <Miembro>Miembro Inferior</Miembro>

        <Container>
          <Cards>
            {ArtroscopiaPlus.map((item, index) => {
              return (
                <>
                  <Link href={`/productos/artroscopia/${item.id}`}>
                    <CardPlus key={index}>
                      <ImgCard
                        src={item.img}
                        alt={`${item.title} Bioprotece`}
                      />

                      <CardBody>
                        <TitleCard>{item.title}</TitleCard>
                        <PCard>Artroscopia</PCard>
                      </CardBody>
                    </CardPlus>
                  </Link>
                </>
              );
            })}

            {ArtroscopiaList.map((item, index) => {
              return (
                  <Card key={index}>
                    <ImgCard
                      src={item.img}
                      alt={`${item.title} Bioprotece`}
                    />

                    <CardBody>
                      <TitleCard>{item.title}</TitleCard>
                      <PCard>Artroscopia</PCard>
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

export default Artroscopia;
