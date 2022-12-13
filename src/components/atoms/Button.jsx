import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../styles/index';
import Icon from './Icon';
import customIcons from '../../styles/customIcons';
import Text from './Text';
// import search from '../../assets/glass.svg';
// import { ReactComponent as MyIcon } from '../../assets/icons/glass.svg';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.blue};
  border: 0;
  padding: 0.5rem;
  border-radius: 0.5rem;

  ${Text} {
    color: ${({ textColor }) => textColor || colors.font.white};
  }

  &:hover {
    filter: brightness(1.1);
  }

  &.blue-gradient {
    background: linear-gradient(90deg, ${colors.lightBlue}, ${colors.darkBlue});
  }
  }
`;

function Button({
  type = 'submit',
  text,
  textColor = 'white',
  disabled,
  icon,
  iconPosition,
  className,
  buttonStyles,
  textStyles,
  iconStyles,
  animated,
  onClick,
}) {
  return (
    <StyledButton
      type={type}
      disabled={disabled}
      className={className}
      style={{ ...buttonStyles }}
      onClick={onClick}
      textColor={textColor}
    >
      {/* <Icon fill={colors.font.white}></Icon> */}
      <Text as="span">{text}</Text>
    </StyledButton>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  textColor: PropTypes.string,
  loadingText: PropTypes.string,
  isLoading: PropTypes.bool,
  iconPosition: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.string,
  buttonStyles: PropTypes.object,
  textStyles: PropTypes.object,
  iconStyles: PropTypes.object,
  animated: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default styled(Button)``;
