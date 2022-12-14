import PropTypes from 'prop-types';
import Header from './header/Header';
import SubHeader from './subHeader/SubHeader';
import { FlexBox } from '../../styles';

function Body({ children }) {
  return (
    <FlexBox>
      <Header />
      <SubHeader />
      {children}
    </FlexBox>
  );
}

Body.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Body;
