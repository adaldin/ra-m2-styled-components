import styled from "styled-components"
import { FlexBox, Grid } from "../../styles"
import { Button } from "../atoms"
import HouseImg from "../../assets/images/casaPiscinaAd2.jpg"
import data from "../../data.json"
import { FrontCardHouse, BackCardHouse } from "./index"

const HousesStyled = styled(FlexBox)`
  width: 100%;

  @media (min-width: 640px) {
    width: 55%;
  }
`

function Houses() {
  const apartments = data.apartments
  return (
    <HousesStyled gap="1rem">
      <Grid>
        {apartments.map((house) => {
          return house === apartments[0] ? (
            <FrontCardHouse
              image={HouseImg}
              name={house.description}
              text={house.price}
              key={house.key}
            />
          ) : (
            <BackCardHouse
              image={HouseImg}
              name={house.description}
              text={house.price}
              key={house.key}
            />
          )
        })}
      </Grid>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button text="Cargar más"></Button>
      </div>
    </HousesStyled>
  )
}

export default Houses
