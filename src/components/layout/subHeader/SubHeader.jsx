import React from 'react';
import styled from 'styled-components';
import { InputGroupText } from '../../molecules/index';
import SubHeaderStyled from './SubHeaderStyled';

const handleChange = (e) => {
  console.log('hola');
};
function SubHeader() {
  return (
    <SubHeaderStyled direction="row">
      <InputGroupText
        name="searcher"
        id="searcher"
        onChange={handleChange}
        label="Piso, chalet o garage.."
      />
      <InputGroupText
        name="searcher"
        id="searcher"
        onChange={handleChange}
        label="Madrid, Barcelona, Zaragoza"
      />
    </SubHeaderStyled>
  );
}

export default styled(SubHeader)``;
