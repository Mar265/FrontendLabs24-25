import { data } from '../data/module-data';
import { useNavigate } from 'react-router-dom';
function Lab1Page() {
  const navigate = useNavigate();
 
  const goToPersonDetails = person => {
    navigate(`/lab2?id=${person.id}`);
  };
 
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Laboratorium 1</h1>
      <div className="row">
        {data.map(person => (
          <div key={person.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{person.name}</h5>
              </div>
              <div className="card-footer">
                <button
                  onClick={() => goToPersonDetails(person)}
                  className="btn btn-primary">
                  View Profile
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default Lab1Page;
 
 