import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import RatingBar from './RatingBar';

function ProfileCard({ name, birth, eyes, initialRating, onEdit, onDelete, onRate }) {
  const [isEditing, setIsEditing] = useState(false); // Stan dla trybu edycji
  const [newName, setNewName] = useState(name);      // Stan dla edytowanego imienia

  const handleSave = () => {
    onEdit(newName);     // Wywołanie onEdit z nową nazwą
    setIsEditing(false); // Wyjście z trybu edycji
  };

  return (
    <Card className="h-100">
      <Card.Body className="d-flex flex-column">
        <Card.Title>
          {isEditing ? (
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="form-control"
            />
          ) : (
            name
          )}
        </Card.Title>
        <Card.Text>
          <strong>Date of Birth:</strong> {birth}
        </Card.Text>
        <Card.Text>
          <strong>Eye Color:</strong> {eyes}
        </Card.Text>
        <Card.Text>
          <strong>Rating:</strong> {initialRating}
        </Card.Text>

        {/* Rating Bar */}
        <RatingBar rate={initialRating} />

        <div className="mt-auto">
          {isEditing ? (
            <Button onClick={handleSave} variant="success" className="m-1">
              Save
            </Button>
          ) : (
            <Button onClick={() => setIsEditing(true)} variant="primary" className="m-1">
              Edit
            </Button>
          )}
          <Button onClick={onDelete} variant="danger" className="m-1">
            Delete
          </Button>
          <Button onClick={onRate} variant="secondary" className="m-1">
            Rate
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  birth: PropTypes.string.isRequired,
  eyes: PropTypes.string.isRequired,
  initialRating: PropTypes.number.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onRate: PropTypes.func.isRequired,
};

export default ProfileCard;
