import styled from 'styled-components';
import { string } from 'prop-types';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const CSS = ({ title }) => (
  <Container>
    <h1>{title}</h1>
  </Container>
);

CSS.propTypes = {
  title: string.isRequired,
};

export default CSS;