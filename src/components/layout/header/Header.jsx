import React from 'react';
import styled from 'styled-components';
import { FlexBox } from '../../../styles';
import { Title } from '../../atoms/index';
import Menu from './Menu';

const HeaderStyled = styled(FlexBox)`
  width: 100%;
`;

function Header() {
  return (
    <HeaderStyled
      padding
      justify="space-between"
      align="baseline"
      direction="row"
    >
      <Title text="MIPISO.com.es" headingSize={6}></Title>
      <Menu />
    </HeaderStyled>
  );
}

export default Header;
