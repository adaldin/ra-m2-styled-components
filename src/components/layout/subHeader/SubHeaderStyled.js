import styled from 'styled-components';
import { colors, FlexBox } from '../../../styles/index';

const SubHeaderStyled = styled(FlexBox)`
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 2em;
  padding-bottom: 2em;
  background-color: ${colors.lightBlue1};
  border-top: solid 1px ${colors.lightBlue2};
  border-bottom: solid 1px ${colors.lightBlue2};
  gap: 1rem;
`;

export default SubHeaderStyled;
