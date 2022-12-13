import styled from 'styled-components';

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 0.5fr));
  grid-template-rows: repeat(3, 1fr);
  row-gap: 15px;
  column-gap: 15px;
`;

export default Grid;
