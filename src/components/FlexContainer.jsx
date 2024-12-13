import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import { useContext } from 'react';
import AppContext from '../data/AppContext';
 
function FlexContainer({ element: Element }) {
  const { items } = useContext(AppContext);
 
  return (
    <Container>
      <Row>
        {items.map(item => (
          <Col key={item.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Element {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
 
FlexContainer.propTypes = {
  element: PropTypes.elementType.isRequired,
};
 
export default FlexContainer;
 
 