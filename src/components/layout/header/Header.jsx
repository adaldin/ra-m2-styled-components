import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { FlexBox } from "../../../styles"
import { Title } from "../../atoms/index"
import { Menu } from "../../molecules/index"

const HeaderStyled = styled(FlexBox)`
  width: 100%;
  a:link {
    text-decoration: none;
  }
  a:focused {
    text-decoration: none;
  }
`

function Header() {
  return (
    <HeaderStyled justify="space-between" align="baseline" direction="row" padding="0rem 1rem">
      <Link to="/">
        <Title text="MIPISO.com.es" headingSize={1}></Title>
      </Link>
      <Menu />
    </HeaderStyled>
  )
}

export default Header
