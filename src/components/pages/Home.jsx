import styled from 'styled-components';
import { FlexBox } from '../../styles';
import { Body } from '../layout';
import Houses from '../organisms/houses/Houses';

const HomeStyled = styled(FlexBox)`
  width: 100%;
`;

function Home() {
  return (
    <Body>
      <HomeStyled direction="row" justify="space-between">
        <Houses />
        <div
          style={{
            backgroundColor: 'red',
            padding: '5rem',
            width: '40%',
          }}
        >
          mapa
        </div>
      </HomeStyled>
    </Body>
  );
}
export default Home;
