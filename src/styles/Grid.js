import styled from 'styled-components';

const Grid = styled.div`
  width: 100%;
  height:100vh;
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 5%;
  grid-column-gap:5%;

  @media only screen and (min-width: 650px) {
      grid-template-columns: 47.5% 47.5%;
     

  }
  @media only screen and (min-width: 981px) {
      grid-template-columns: 30% 30% 30%;
  
`;

export default Grid;
