import { useLocation } from 'react-router-dom';
import { data } from '../data/module-data';
 
const Lab2Page = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const personId = queryParams.get('id');
  const person = data.find(p => p.id === parseInt(personId, 10));
 
  return (
    <div>
      <h1>Profil osoby</h1>
      {person ? (
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
      ) : (
        <p>Osoba nie została znaleziona.</p>
      )}
    </div>
  );
};
 
export default Lab2Page;
 
 