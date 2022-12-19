import React from "react";
import styled from "styled-components";
import { FlexBox } from "../../styles";

const StyledIcon = styled(FlexBox)`
  width: 20px;
  height: 20px;
  svg {
    fill: ${({ fill }) => fill || "white"};
  }
`;

function Icon({ fill, children }) {
  return (
    <StyledIcon fill={fill} justify="center">
      {children}
    </StyledIcon>
  );
}
export default Icon;
