import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { colors, dimensions, FlexBox } from "../../styles/index"
import { Text, Title, Card, Button } from "../atoms/index"

const CoverImg = styled.img`
  width: 100%;
  height: 60%;
  object-fit: cover;
  border-radius: 6px;
`
const CardBody = styled(FlexBox)`
  padding: 0.3rem;
  ${Text} {
    opacity: 0.8;
  }
`

function BackCardHouse({ image, text, name }) {
  return (
    <Card>
      <CoverImg src={image} alt={name} />
      <CardBody>
        <Title
          headingSize={1}
          fontSize={`${dimensions.sm}`}
          color={`${colors.font.base}`}
          text={name}
        >
          {text}
        </Title>
        <FlexBox direction="row" justify="space-between" align="center">
          <Text color="black" fontWeight="bold" fontSize={dimensions.sm}>
            {text}
          </Text>
          <Button
            text="Localizar"
            fontSize={dimensions.sm}
            buttonStyles={{
              backgroundColor: `${colors.main}`,
              width: "50%",
              height: "50%",
            }}
          ></Button>
        </FlexBox>
      </CardBody>
    </Card>
  )
}
BackCardHouse.propTypes = {
  image: PropTypes.string,
  text: PropTypes.string.isRequired,
  name: PropTypes.string,
}

export default styled(BackCardHouse)``
