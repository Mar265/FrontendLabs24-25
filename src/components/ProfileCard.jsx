import React from 'react';
import Card from 'react-bootstrap/Card';
 
function ProfileCard({ name, birth, eyes, rating }) {
  return (
    <Card>
      <Card.Body>
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
      </Card.Body>
    </Card>
  );
}
 
export default ProfileCard;