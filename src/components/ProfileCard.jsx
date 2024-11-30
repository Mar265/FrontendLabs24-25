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
 
  const handleRateClick = () => {
    dispatch({
      type: 'rate',
      id,
      rating: rating === 10 ? 0 : rating + 1,
    });
  };
 
  const handleDeleteClick = () => {
    dispatch({
      type: 'delete',
      id,
    });
  };
 
  const handleEditClick = () => {
    navigate(`/lab4/edit/${id}`);
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
 
        {/* Rating Bar */}
        <RatingBar rate={rating} />
 
        <div className="mt-auto">
          <Button onClick={handleEditClick} variant="primary" className="m-1">
            Edit
          </Button>
          <Button onClick={handleDeleteClick} variant="danger" className="m-1">
            Delete
          </Button>
          <Button onClick={handleRateClick} variant="secondary" className="m-1">
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