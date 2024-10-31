import { useParams, useNavigate } from 'react-router-dom';
import { data } from '../data/module-data';
import { useEffect } from 'react';
 
function PeoplePage() {
  const { id } = useParams();
  const navigate = useNavigate();
 
  const person = data.find(p => p.id === parseInt(id, 10));
 
  useEffect(() => {
    if (!person) {
      navigate('/404', { replace: true });
    }
  }, [person, navigate]);
 
  if (!person) {
    return null;
  }
 
  return (
    <>
      <h1>Szukane imie</h1>
      <div className="container mt-4">
        <div className="card">
          <div className="card-header text-center">
            <h2>{person.name}</h2>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Imię:</strong> {person.name}
              </li>
              <li className="list-group-item">
                <strong>Kolor oczu:</strong> {person.eyes}
              </li>
              <li className="list-group-item">
                <strong>Data urodzenia:</strong> {person.birth}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
 
export default PeoplePage;
 
 