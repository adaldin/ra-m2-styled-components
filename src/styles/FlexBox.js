import styled from 'styled-components';

const FlexBox = styled.div`
  display: flex;
  align-items: ${({ align }) => align || 'stretch'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  flex-direction: ${({ direction }) => direction || 'column'};
  flex-wrap: wrap;
  padding: ${({ padding }) => (padding ? padding : '0rem')};
  gap: ${({ gap }) => gap || '0rem'};
`;

export default FlexBox;
