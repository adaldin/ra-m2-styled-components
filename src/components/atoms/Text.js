import styled from 'styled-components';
import { colors, fonts } from '../../styles';

const Text = styled.p`
  color: ${({ color }) => color || colors.font.base};
  font-size: ${({ fontSize }) => fontSize || fonts.size.base};
  font-weight: ${({ fontWeight }) => fontWeight || 'regular'};
`;

export default Text;
