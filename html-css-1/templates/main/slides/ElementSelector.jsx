import React, { useContext } from 'react';
import styled from 'styled-components';
import { string, objectOf } from 'prop-types';
import { LineHeader } from '../components';
import ThemeContext from '../components/ThemeContext';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 56px 0 241px 0;

  img {
    margin-top: 151px;
  }
`;


const ElementSelector = ({ title, image }) => {

  let theme = useContext(ThemeContext);

    return(
      <Container>
        <LineHeader alignSelf="center">{title}</LineHeader>
        <img src={theme === 'light'? image.light : image.dark} />
      </Container>
    );
  }
  

ElementSelector.propTypes = {
  title: string.isRequired,
  image: objectOf(string),
};

export default ElementSelector;