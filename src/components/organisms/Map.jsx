import styled from "styled-components"
import { colors, FlexBox } from "../../styles"
import { BackCardHouse } from "./index"
import map from "../../assets/images/map.png"
import data from "../../data.json"
import image from "../../assets/images/casaPiscinaAd2.jpg"

const StyledMap = styled(FlexBox)`
  border-radius: 0.4rem;
  width: 100%;
  height: 80vh;
  border: 1px solid ${colors.main};
  background-image: url(${map});
  background-size: cover;
  background-position: center;
  margin-top: 1rem;

  @media (min-width: 1100px) {
    width: 45%;
    margin-top: 0rem;
  }
`

function Map() {
  const apartment = data.apartments[0]
  return (
    <StyledMap align="center" justify="center" padding>
      <BackCardHouse
        image={image}
        name={apartment.description}
        text={apartment.price}
        key={apartment.key}
      />
    </StyledMap>
  )
}

export default Map
