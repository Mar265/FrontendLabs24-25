import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import { useReducer } from 'react';
import AppReducer from '../data/AppReducer';
 
function FlexContainer({ element: Element, data }) {
  const [items, dispatch] = useReducer(AppReducer, data);
 
  return (
    <Container>
      <Row>
        {items.map((item, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Element {...item} dispatch={dispatch} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
 
FlexContainer.propTypes = {
  element: PropTypes.elementType.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
 
export default FlexContainer;
 
 