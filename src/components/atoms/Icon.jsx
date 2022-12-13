import React from 'react';
import styled from 'styled-components';
import { colors, FlexBox } from '../../styles';

const StyledIcon = styled(FlexBox)`
  width: 20px;
  height: 20px;
  svg {
    fill: ${({ fill }) => fill || 'white'}};
  }
`;

// const StyledIcon = styled.svg`
//   width: 24px;
//   height: 24px;
// fill: ${({ fill }) => fill || colors.font.white}};

// `;

function Icon({ fill, children }) {
  return (
    <StyledIcon fill={fill} justify="center">
      {children}
    </StyledIcon>
  );
}
export default Icon;
