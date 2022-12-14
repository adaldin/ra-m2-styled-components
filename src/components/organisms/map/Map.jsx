import styled from 'styled-components';
import { colors, FlexBox } from '../../../styles';

const StyledMap = styled(FlexBox)`
  background-color: ${colors.lightGrey};
  border-radius: 0.4rem;
  width: 100%;

  @media (min-width: 650px) {
    width: 45%;
  }
`;

function Map() {
  return (
    <StyledMap align="center" padding>
      map
    </StyledMap>
  );
}

export default Map;
