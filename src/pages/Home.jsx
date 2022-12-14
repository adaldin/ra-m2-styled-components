import styled from 'styled-components';
import { FlexBox } from '../styles';
import { Body } from '../components/layout';
import { Houses, Map } from '../components/organisms/index';

const HomeStyled = styled(FlexBox)`
  width: 100%;

  @media (min-width: 640px) {
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
