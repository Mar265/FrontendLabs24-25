import { useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import AppContext from '../data/AppContext';
 
function Lab4Page() {
  const { items } = useContext(AppContext); // Pobieramy listę obiektów
  const navigate = useNavigate();
  const [editId, setEditId] = useState('');
 
  const handleEditSubmit = () => {
    if (editId) {
      navigate(`/lab4/edit/${editId}`);
    } else {
      alert('Wprowadź poprawne ID obiektu.');
    }
  };
 
  useEffect(() => {
    // Dzięki useEffect komponent będzie się odświeżał, jeśli zmieni się stan (items)
  }, [items]);
 
  return (
    <>
      <h3>Dodaj obiekt</h3>
      <button onClick={() => navigate('/lab4/add')}>Dodaj</button>
 
      <div className="mt-4">
        <h3>Edytuj obiekt</h3>
        <div className="mt-3">
          <label htmlFor="editId">ID obiektu do edycji:</label>
          <input
            type="number"
            id="editId"
            value={editId}
            onChange={e => setEditId(e.target.value)}
            placeholder="Wprowadź ID"
          />
          <button className="ml-2" onClick={handleEditSubmit}>
            Edytuj
          </button>
        </div>
      </div>
    </>
  );
}
 
export default Lab4Page;