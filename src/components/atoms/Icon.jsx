import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { colors, fonts } from "../../styles"

const StyledIcon = styled.span`
  font-variation-settings: "FILL" ${(props) => props.fill}, "wght" ${(props) => props.wght},
    "GRAD" ${(props) => props.grad}, "opsz" ${(props) => props.opsz};
  color: ${colors.font.white};
  font-size: ${fonts.size.base}px;
  text-align: center;
`

function Icon({ name, size = 24, fill = 0, wght = 500, grad = 0, opsz = 48, className = "" }) {
  return (
    <StyledIcon
      className={`material-symbols-outlined ${className}`}
      fill={fill}
      wght={wght}
      grad={grad}
      opsz={opsz}
      size={size}
    >
      {name}
    </StyledIcon>
  )
}

Icon.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.number,
  size: PropTypes.number,
  name: PropTypes.string,
  children: PropTypes.node,
}
export default Icon
