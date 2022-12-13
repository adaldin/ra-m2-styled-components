import styled from 'styled-components';
import { colors, FlexBox } from '../../../styles';

function Map() {
  const StyledMap = styled(FlexBox)`
    background-color: ${colors.lightGrey};
    border-radius: 0.4rem;
    width: 100%;

    @media (min-width: 600px) {
      width: 40%;
    }
  `;

  return (
    <StyledMap align="center" padding>
      map
    </StyledMap>
  );
}

export default Map;
