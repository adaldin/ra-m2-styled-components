import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../../styles";
import FlexBox from "../../../styles/FlexBox";

// Moverlo a nivel de molecules, para poder reutilziar
const MenuStyled = styled(FlexBox)`
  list-style-type: none;
  gap: 1rem;
  li {
    color: ${colors.font.base};
    &:hover {
      color: ${({ hoverColor }) => (hoverColor ? hoverColor : "")};
    }
  }
`;

function Menu() {
  return (
    <MenuStyled as="ul" direction="row" justify="end" hoverColor={colors.main}>
      {/* Las urls (el parametro de to) deberían estar definidas en constantes */}
      <Link to="/">
        {/* Los label de los menús deberían estar definidos en cosntantes */}
        <li>Buscador</li>
      </Link>
      <Link to="/data">
        <li>Datos</li>
      </Link>
      <Link to="/profile">
        <li>Mi Perfil</li>
      </Link>
    </MenuStyled>
  );
}

export default Menu;
