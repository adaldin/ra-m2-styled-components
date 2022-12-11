import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  column-gap: 10px;
  row-gap: 15px;
`;

export default Grid;
