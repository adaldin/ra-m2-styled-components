import React from 'react';
import styled from 'styled-components';

const StyledIcon = styled.div`
  width: 24px;
  height: 24px;
  svg {
    fill: ${({ fill }) => fill || 'red'}};
  }
`;

function Icon({ fill }) {
  return <StyledIcon fill={fill}></StyledIcon>;
}
export default Icon;
