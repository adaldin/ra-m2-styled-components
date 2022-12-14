import styled from 'styled-components';
import { FlexBox, Grid } from '../../../styles';
import { Button } from '../../atoms';
import BackCardHouse from '../backCardHouses/BackCardHouse';
import HouseImg from '../../../assets/images/casaPiscinaAd2.jpg';
import data from '../../../data.json';
import FrontCardHouse from '../frontCardHouse/FrontCardHouse';

const HousesStyled = styled(FlexBox)`
  width: 100%;

  @media (min-width: 640px) {
    width: 55%;
  }
`;

function Houses() {
  const apartments = data.apartments;
  return (
    <HousesStyled gap="1rem">
      <Grid>
        {apartments.map((house) => {
          return house === apartments[0] ? (
            <FrontCardHouse
              image={HouseImg}
              name={house.description}
              text={house.price}
              key={house.key}
            />
          ) : (
            <BackCardHouse
              image={HouseImg}
              name={house.description}
              text={house.price}
              key={house.key}
            />
          );
        })}
      </Grid>
      {/* <BackCardHouse image={HouseImg} text={'Piso en Barcelona, Gracia'} /> */}
      {/* <Grid>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Grid> */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button text="Cargar más"></Button>
      </div>
    </HousesStyled>
  );
}

export default Houses;
