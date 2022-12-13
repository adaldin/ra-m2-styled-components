import styled from 'styled-components';
import { FlexBox } from '../../styles';
import { Body } from '../layout';
import Houses from '../organisms/houses/Houses';
import Map from '../organisms/map/Map';

const HomeStyled = styled(FlexBox)`
  width: 100%;
  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

function Home() {
  return (
    <Body>
      <HomeStyled justify="space-between" padding="1rem">
        <Houses />
        <Map />
      </HomeStyled>
    </Body>
  );
}
export default Home;
