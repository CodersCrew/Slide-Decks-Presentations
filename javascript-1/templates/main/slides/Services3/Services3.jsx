import styled from 'styled-components';
import { string, arrayOf, exact } from 'prop-types';
import { BoxHeading, LineHeader } from '../../components';
import Item from './Item';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px 80px 198px 86px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${props => props.styles}
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: min-content;
  grid-gap: 80px 72px;
`;

const Services3 = ({ title, content, items, styles }) => (
  <Container styles={styles} className="services2">
    <LineHeader alignSelf="center">{title}</LineHeader>
    <BoxHeading align="center" content={content}>
      <Items className="items">
        {items.map(item => (
          <Item key={item.icon} {...item} />
        ))}
      </Items>
    </BoxHeading>
  </Container>
);

Services3.propTypes = {
  title: string.isRequired,
  content: string.isRequired,
  items: arrayOf(
    exact({
      icon: string,
      title: string,
      content: string,
    }),
  ),
  styles: arrayOf(string),
};

export default Services3;
