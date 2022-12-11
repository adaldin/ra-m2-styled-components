import React from 'react';
import styled from 'styled-components';
import { colors, dimensions } from '../../../styles';
import FlexBox from '../../../styles/FlexBox';

const MenuStyled = styled(FlexBox)`
  list-style-type: none;
  gap: 1rem;
  color: ${colors.font.base};
  li {
    &:hover {
      color: ${({ hoverColor }) => (hoverColor ? hoverColor : '')};
    }
  }
`;

function Menu() {
  return (
    <MenuStyled as="ul" direction="row" justify="end" hoverColor={colors.main}>
      <li>Buscador</li>
      <li>Datos</li>
      <li>Mi Perfil</li>
    </MenuStyled>
  );
}

export default Menu;
