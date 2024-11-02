import React from 'react';
import Card from 'react-bootstrap/Card';

const data = [
  { name: "Ala", id: 1 },
  { name: "Ela", id: 2 },
  { name: "Karol", id: 3 },
  { name: "Ola", id: 4 },
  { name: "Monik", id: 5 },
  { name: "Robert", id: 6 },
];

const Item = ({ name, id }) => (
  <Card style={{ width: '18rem' }} className="border mb-3 p-3">
    <Card.Body>
      <Card.Title>{name}</Card.Title>
    </Card.Body>
  </Card>
);

export default Item;
export { data };
