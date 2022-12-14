import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../styles';

const InputTextStyled = styled.input`
  border-radius: 0.3rem;
  border: 1px solid ${colors.lightBlue2};
  font-size: 14px;
  padding: 0.3rem;
  box-shadow: 0px 3px 6px #00000029;

  &:hover {
    border: 1px solid ${colors.main};
  }
  &:focus {
    outline: 0 none;
    border: 1px solid ${colors.lightBlue2};
  }
`;

export function InputText({ name, id, onChange, text }) {
  return (
    <InputTextStyled
      type="text"
      name={name}
      id={id}
      onChange={onChange}
      placeholder={text}
    />
  );
}

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
