import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, dimensions, FlexBox, fonts } from '../../../styles/index';
import { Text, Title, Card, Button } from '../../atoms/index';
import BackCardHouse from '../backCardHouses/BackCardHouse';

const Img = styled(BackCardHouse)`
  width: 100%;
  border-radius: 6px;
`;
const CardBody = styled(FlexBox)`
  padding: 0.5rem;

  ${Text} {
    opacity: 0.8;
  }
`;

function FrontCardHouse({
  image,
  text,
  name,
  ad,
  containerClassName,
  titleClassName,
}) {
  return (
    <Card
      ad={ad}
      containerClassName={containerClassName}
      titleClassName={titleClassName}
    >
      <Img src={image} alt={name} />
      <CardBody>
        <Title
          headdingSize={6}
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
              width: '50%',
              height: '50%',
            }}
          ></Button>
        </FlexBox>
      </CardBody>
    </Card>
  );
}
FrontCardHouse.propTypes = {
  containerClassName: PropTypes.string,
  titleClassName: PropTypes.string,
  ad: PropTypes.object,
  image: PropTypes.object,
  description: PropTypes.string.isRequired,
  fontSize: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string.isRequired,
  name: PropTypes.string,
};

export default styled(FrontCardHouse)``;
