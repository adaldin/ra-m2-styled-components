import React from 'react';
import styled from 'styled-components';
import SearcherBar from '../../organisms/searcherBar/SearcherBar';
import SubHeaderStyled from './SubHeaderStyled';

function SubHeader() {
  return (
    <SubHeaderStyled direction="row">
      <SearcherBar />
    </SubHeaderStyled>
  );
}

export default styled(SubHeader)``;
