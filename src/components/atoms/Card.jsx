import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { FlexBox } from "../../styles/index"

const CardStyled = styled(FlexBox)`
  background: white;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 0.4rem;
  width: 175px;
  height: 200px;
  position: relative;
`

function Card({ children }) {
  return <CardStyled>{children}</CardStyled>
}
Card.propTypes = {
  children: PropTypes.node,
}

export default styled(Card)``
