import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import RatingBar from './RatingBar';
import { useContext } from 'react';
import AppContext from '../data/AppContext';
import { useNavigate } from 'react-router-dom';
 
function ProfileCard({ id, name, birth, eyes, rating }) {
  const { dispatch } = useContext(AppContext);
  const navigate = useNavigate();
 
  const handlers = {
    rate: () => {
      dispatch({
        type: 'rate',
        id,
        rating: rating === 10 ? 0 : rating + 1,
      });
    },
    delete: () => {
      dispatch({
        type: 'delete',
        id,
      });
    },
    edit: () => {
      navigate(`/lab4/edit/${id}`);
    },
  };
 
  return (
    <Card className="h-100">
      <Card.Body className="d-flex flex-column">
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Date of Birth:</strong> {birth}
        </Card.Text>
        <Card.Text>
          <strong>Eye Color:</strong> {eyes}
        </Card.Text>
        <Card.Text>
          <strong>Rating:</strong> {rating}
        </Card.Text>
 
        <RatingBar rate={rating} />
 
        <div className="btn-group mt-auto" role="group">
          <Button onClick={handlers.edit} variant="primary">
            Edit
          </Button>
          <Button onClick={handlers.delete} variant="danger">
            Delete
          </Button>
          <Button onClick={handlers.rate} variant="secondary">
            Rate
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
 
ProfileCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  birth: PropTypes.string.isRequired,
  eyes: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};
 
export default ProfileCard;
 
 