import styled from 'styled-components';

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: repeat(3, 1fr);
  column-gap: 2px;
  row-gap: 15px;
`;

export default Grid;
