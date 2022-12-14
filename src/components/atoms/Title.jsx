import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors, fonts } from '../../styles';
import { Text } from '../atoms/index';

const TitleStyled = styled(Text)`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight || fonts.weight.regular};
`;

function Title({
  fontSize = `${fonts.size.base}`,
  color = `${colors.font.headings}`,
  text = '',
  headingSize,
}) {
  return (
    <TitleStyled
      as={`h${headingSize}`}
      fontSize={fontSize}
      color={color}
      text={text}
    >
      {text}
    </TitleStyled>
  );
}

Title.propTypes = {
  fontSize: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string.isRequired,
  headingSize: PropTypes.number.isRequired,
};

export default styled(Title)``;
