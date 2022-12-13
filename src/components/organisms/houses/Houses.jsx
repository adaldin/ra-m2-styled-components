import styled from 'styled-components';
import { FlexBox, Grid } from '../../../styles';
import { Button, Card } from '../../atoms';

function Houses() {
  const HousesStyled = styled(FlexBox)`
    width: 100%;

    @media (min-width: 600px) {
      width: 60%;
    }
  `;
  return (
    <HousesStyled gap="1rem">
      <Grid>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Grid>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button text="Cargar más"></Button>
      </div>
    </HousesStyled>
  );
}

export default Houses;
