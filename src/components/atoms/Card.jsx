import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FlexBox } from "../../styles/index";

// Debería ser un styled-component (.js), no un componente (.jsx)
const CardStyled = styled(FlexBox)`
  background: white;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 0.4rem;
  width: 175px; // width no debería estar aquí
  height: 200px; // height no debería de estar aquí
  position: relative;
`;

function Card({ children }) {
  return <CardStyled>{children}</CardStyled>;
}
Card.propTypes = {
  children: PropTypes.node,
};

export default styled(Card)``;
