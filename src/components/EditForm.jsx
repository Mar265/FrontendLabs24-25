import { useState, useContext, useEffect } from 'react';
import AppContext from '../data/AppContext';
import { useParams, useNavigate } from 'react-router-dom';
 
const allowedEyeColors = ['brown', 'blue', 'green', 'hazel']; // Przykładowe kolory oczu
 
function EditForm() {
  const { items, dispatch } = useContext(AppContext);
  const { id } = useParams();
  const navigate = useNavigate();
 
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    birth: '',
    eyes: '',
  });
 
  const [errors, setErrors] = useState([]);
 
  useEffect(() => {
    const person = items.find(item => item.id === parseInt(id, 10));
    if (person) {
      setFormData(person);
    } else {
      navigate('/404', { replace: true });
    }
  }, [id, items, navigate]);
 
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
 
  const handleSubmit = e => {
    e.preventDefault();
    const newErrors = [];
 
    // Walidacja: sprawdzenie, czy imię zaczyna się od dużej litery
    if (!/^[A-Z]/.test(formData.name)) {
      newErrors.push("Imię musi zaczynać się od dużej litery");
    }
 
    // Walidacja: sprawdzenie koloru oczu
    if (!allowedEyeColors.includes(formData.eyes.toLowerCase())) {
      newErrors.push("Kolor oczu musi być jednym z dozwolonych: " + allowedEyeColors.join(', '));
    }
 
    // Walidacja: sprawdzenie daty urodzenia
    if (new Date(formData.birth) > new Date()) {
      newErrors.push("Data urodzenia nie może być z przyszłości");
    }
 
    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }
 
    dispatch({
      type: 'edit',
      id: formData.id,
      updatedItem: {
        name: formData.name,
        birth: formData.birth,
        eyes: formData.eyes,
      },
    });
 
    navigate('/lab3');
  };
 
  return (
    <form onSubmit={handleSubmit}>
      <h1>Edycja użytkownika</h1>
      <input type="hidden" name="id" value={formData.id} />
 
      {errors.length > 0 && (
        <div className="error-messages">
          {errors.map((error, index) => <p key={index} className="error">{error}</p>)}
        </div>
      )}
 
      <label htmlFor="name">Imię</label>
      <input
        required
        name="name"
        id="name"
        value={formData.name}
        onChange={handleChange}
      />
 
      <label htmlFor="birth">Data urodzenia</label>
      <input
        required
        name="birth"
        id="birth"
        value={formData.birth}
        onChange={handleChange}
        type="date"
      />
 
      <label htmlFor="eyes">Kolor oczu</label>
      <input
        required
        name="eyes"
        id="eyes"
        value={formData.eyes}
        onChange={handleChange}
        type="text"
      />
 
      <button type="submit">Zapisz zmiany</button>
    </form>
  );
}
 
export default EditForm;