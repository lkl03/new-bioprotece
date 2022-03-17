import {
  EquipoListPlus,
  EquipoList,
} from "../../components/Equipamiento/EquipoList";
import Link from "next/link";
import {
  EquipamientoS,
  Container,
  Title,
  Cards,
  Card,
  CardPlus,
  CardBody,
  ImgCard,
  TitleCard,
  PCard,
} from "../../styles/StyledEquipamiento";
import ScrollArrow from "../../components/Generales/ScrollArrow";
import Nav from '../../components/Navbar/Nav'


const Equipamiento = () => {
  return (
    <>
      <Nav />
      <EquipamientoS id='equipamiento'>
        <Title>Nuestro Equipamiento</Title>

        
          <Cards>
            {EquipoListPlus.map((item, index) => {
              return (
                <>
                  <Link href={`/equipamiento/${item.id}`}>
                    <CardPlus key={item.id}>
                      <ImgCard
                        src={item.img}
                        alt={`${item.title} Bioprotece`}
                      />

                      <CardBody>
                        <TitleCard>{item.title}</TitleCard>
                        <PCard>{item.text}</PCard>
                      </CardBody>
                    </CardPlus>
                  </Link>
                </>
              );
            })}

            {EquipoList.map((item, index) => {
              return (
                <Card key={item.title}>
                  <ImgCard src={item.img} alt={`${item.title} Bioprotece`} />

                  <CardBody>
                    <TitleCard>{item.title}</TitleCard>
                    <PCard>{item.text}</PCard>
                  </CardBody>
                </Card>
              );
            })}
          </Cards>


        <ScrollArrow />
      </EquipamientoS>
    </>
  );
};

export default Equipamiento;
