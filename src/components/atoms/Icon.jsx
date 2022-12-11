import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors } from '../../styles/index';

const IconStyled = styled.span`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size}px;
`;
const SvgStyled = styled.svg`
  fill: white;
`;

function Icon({ size = 16, fill = colors.font.white, name }) {
  return (
    <IconStyled>
      <SvgStyled fill={fill} width={size} height={size} name={name} />
    </IconStyled>
  );
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  fill: PropTypes.number,
  wght: PropTypes.number,
  grad: PropTypes.number,
  opsz: PropTypes.number,
  className: PropTypes.string,
};

export default styled(Icon)``;
