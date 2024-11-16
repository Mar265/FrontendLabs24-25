import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import { useContext } from 'react';
import AppContext from '../data/AppContext';
 
function FlexContainer({ element: Element }) {
  const context = useContext(AppContext);
  const { items, dispatch } = context; // Pobierz items i dispatch z kontekstu
 
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
};
 
export default FlexContainer;
 