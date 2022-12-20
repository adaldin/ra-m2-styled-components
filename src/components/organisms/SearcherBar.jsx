import { colors, FlexBox } from "../../styles"
import { Button, Icon } from "../atoms"
import { InputGroupText } from "../molecules"

function SearcherBar() {
  const handleChange = (e) => {
    console.log("hola")
  }

  const handleClick = (e) => {
    console.log("hola")
  }

  return (
    <FlexBox direction="row" gap="1rem" align="center">
      <InputGroupText
        name="searcher"
        id="searcher"
        onChange={handleChange}
        label="Piso, chalet o garage.."
      />
      <InputGroupText
        name="searcher"
        id="searcher"
        onChange={handleChange}
        label="Madrid, Barcelona, Zaragoza"
      />
      <Button
        icon="search"
        iconStyles={{
          fill: 0,
          size: 20,
        }}
        className="blue-gradient"
        buttonStyles={{
          width: "30px",
          height: "30px",
        }}
        onClick={handleClick}
      />
    </FlexBox>
  )
}

export default SearcherBar
