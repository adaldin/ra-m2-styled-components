import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { colors, dimensions, FlexBox, fonts } from "../../styles/index"
import { Text, Title, Card } from "../atoms/index"

const CoverImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
`
const CardBody = styled(FlexBox)`
  padding: 0.5rem;
  width: 100%;
  flex-direction: row;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;

  ${Text} {
    font-size: ${dimensions.base};
    font-weight: ${fonts.weight.bold};
    color: ${colors.font.white};
  }
`

function FrontCardHouse({ image, text, name }) {
  return (
    <Card>
      <CoverImg src={image} alt={name} />
      <CardBody>
        <Title text={name} headingSize={1} />
        <Text>{text}</Text>
      </CardBody>
    </Card>
  )
}
FrontCardHouse.propTypes = {
  image: PropTypes.string,
  text: PropTypes.string.isRequired,
  name: PropTypes.string,
}

export default styled(FrontCardHouse)``
