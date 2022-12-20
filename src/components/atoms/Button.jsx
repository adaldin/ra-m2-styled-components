import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { colors } from "../../styles/index"
import Icon from "./Icon"
import Text from "./Text"

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.blue};
  border: 0;
  padding: 0.5rem;
  border-radius: 0.2rem;

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
`

function Button({
  type = "submit",
  text,
  textColor = "white",
  className,
  buttonStyles,
  onClick,
  fontSize,
  icon,
}) {
  return (
    <StyledButton
      type={type}
      className={className}
      style={{ ...buttonStyles }}
      onClick={onClick}
      textColor={textColor}
    >
      {icon ? (
        <Icon size={24} name="search">
          {icon}
        </Icon>
      ) : (
        <Text as="span" fontSize={fontSize}>
          {text}
        </Text>
      )}
    </StyledButton>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  textColor: PropTypes.string,
  fontSize: PropTypes.string,
  className: PropTypes.string,
  buttonStyles: PropTypes.object,
  onClick: PropTypes.func,
}

export default styled(Button)``
