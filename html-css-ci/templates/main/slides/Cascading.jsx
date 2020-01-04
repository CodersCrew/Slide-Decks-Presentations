import styled from 'styled-components';
import { string, objectOf } from 'prop-types';
import { LineHeader } from '../components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const Content = styled.div`
    margin-top: 112px;

    p {
        line-height: 60px;

        :nth-child(1){
            margin-bottom: 50px;
        }
    }
`;

const Left = styled.div`
    display: flex;
    flex-basis: 50%;

    img {
        width: 100%;
        object-fit: cover;
    }
`;

const Right = styled.div`
    display: flex;
    flex-basis: 50%;
    flex-direction: column;
    padding: 56px 97px 315px 58px;
`;


const Cascading = ({ title, content, image }) => (
  <Container>
    <Left>
        <img src={image} />
    </Left>
    <Right>
        <LineHeader>{title}</LineHeader>
        <Content>
            <p>{content.up}</p>
            <p>{content.down}</p>
        </Content>
    </Right>
  </Container>
);

Cascading.propTypes = {
  title: string.isRequired,
  content: objectOf(string),
  image: string.isRequired,
};

export default Cascading;