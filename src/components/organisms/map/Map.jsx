import styled from 'styled-components';
import { colors, FlexBox } from '../../../styles';

function Map() {
  const StyledMap = styled(FlexBox)`
    background-color: ${colors.lightGrey};
    width: 40%;
    border-radius: 0.4rem;
  `;

  return (
    <StyledMap align="center" padding>
      map
    </StyledMap>
  );
}

export default Map;
