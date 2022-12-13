import { FlexBox } from '../../../styles';
import { Button } from '../../atoms';
import { InputGroupText } from '../../molecules';

function SearcherBar() {
  const handleChange = (e) => {
    console.log('hola');
  };

  return (
    <FlexBox direction="row" gap="1rem" align="baseline">
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
      <Button text="BO" className="blue-gradient"></Button>
    </FlexBox>
  );
}

export default SearcherBar;
