import styled from "styled-components"

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  grid-auto-rows: minmax(100px, auto);
`

export default Grid
