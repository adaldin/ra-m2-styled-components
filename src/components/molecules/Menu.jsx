import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { colors } from "../../styles"
import FlexBox from "../../styles/FlexBox"
import { urls } from "../../utils/urls"

const MenuStyled = styled(FlexBox)`
  list-style-type: none;
  gap: 1rem;
  li {
    color: ${colors.font.base};
    &:hover {
      color: ${({ hoverColor }) => (hoverColor ? hoverColor : "")};
    }
  }
`

export function Menu() {
  return (
    <MenuStyled as="ul" direction="row" justify="end" hoverColor={colors.main}>
      <Link to={urls.home.url}>
        <li>{urls.home.label} </li>
      </Link>
      <Link to={urls.data.url}>
        <li>{urls.data.label}</li>
      </Link>
      <Link to={urls.profile.url}>
        <li>{urls.profile.label}</li>
      </Link>
    </MenuStyled>
  )
}
