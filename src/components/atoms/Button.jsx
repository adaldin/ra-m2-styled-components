import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, fonts } from '../../styles/index';
// import Icon from './Icon';
import Text from './Text';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.blue};
  border: 0;
  padding: 0.8rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: ${fonts.size.base};
  margin: 10px 0px;

  ${Text} {
    color: ${(props) => props.textColor || colors.white};
  }

  &:hover {
    filter: brightness(1.1);
  }

  &.blue-gradient {
    background: linear-gradient(90deg, ${colors.lightBlue1}, ${colors.blue});
  }
  &.blue-gradientWidth {
    background: linear-gradient(90deg, ${colors.lightBlue1}, ${colors.blue});
  }
  }
  &.green-gradient {
    background:
      ${colors.green}
  }
  &.disabled {
    cursor: not-allowed;
    opacity: 0.57;
  }

`;

function Button({
  type = 'submit',
  text,
  textColor = 'white',
  loadingText,
  isLoading,
  disabled,
  icon,
  iconPosition,
  className,
  buttonStyles,
  textStyles,
  iconStyles,
  animated,
  onClick,
  ...props
}) {
  return (
    <StyledButton
      type={type}
      disabled={disabled}
      className={`${className} ${animated ? 'animated' : ''} ${
        disabled ? 'disabled' : ''
      }`}
      style={{ ...buttonStyles }}
      onClick={onClick}
      textColor={textColor}
      {...props}
    >
      {iconPosition === 'left' &&
        (!isLoading && icon ? (
          <Icon
            color={textColor}
            name={icon}
            mr="0.5rem"
            style={{ ...iconStyles }}
          />
        ) : null)}
      <Text
        as="span"
        text={isLoading ? loadingText : text}
        style={{ ...textStyles }}
      />
      {iconPosition === 'right' &&
        (!isLoading && icon ? (
          <Icon
            color={textColor}
            name={icon}
            ml="0.5rem"
            style={{ ...iconStyles }}
          />
        ) : null)}
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
