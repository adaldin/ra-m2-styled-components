import { FlexBox } from "../../../styles";
import { Button } from "../../atoms";
import { InputGroupText } from "../../molecules";

function SearcherBar() {
  const handleChange = (e) => {
    console.log("hola");
  };

  const handleClick = (e) => {
    console.log("hola");
  };

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
        className="blue-gradient"
        buttonStyles={{
          width: "30px",
          height: "30px",
        }}
        onClick={handleClick}
      >
        {/* Cfear un componente Icon que utilice una fuente de iconos como la de Google https://fonts.google.com/icons */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
        </svg>
      </Button>
    </FlexBox>
  );
}

export default SearcherBar;
