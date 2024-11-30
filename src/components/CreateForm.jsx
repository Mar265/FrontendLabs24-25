import { useContext, useState } from 'react';
import AppContext from '../data/AppContext';
 
const allowedEyeColors = ['brown', 'blue', 'green', 'hazel'];
 
function CreateForm() {
  const { dispatch } = useContext(AppContext);
  const [errors, setErrors] = useState([]);
 
  const handleSubmit = e => {
    e.preventDefault();
 
    const form = e.target;
    const newItem = {
      name: form.name.value,
      birth: form.birth.value,
      eyes: form.eyes.value,
      rating: parseInt(form.rating.value),
    };
 
    const newErrors = [];
 
    if (!/^[A-Z]/.test(newItem.name)) {
      newErrors.push('Imię musi zaczynać się od dużej litery');
    }
 
    if (!allowedEyeColors.includes(newItem.eyes.toLowerCase())) {
      newErrors.push(
        'Kolor oczu musi być jednym z dozwolonych: ' +
          allowedEyeColors.join(', ')
      );
    }
 
    if (new Date(newItem.birth) > new Date()) {
      newErrors.push('Data urodzenia nie może być z przyszłości');
    }
 
    if (isNaN(newItem.rating) || newItem.rating < 0 || newItem.rating > 10) {
      newErrors.push('Ocena musi być liczbą od 0 do 10');
    }
 
    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }
 
    dispatch({
      type: 'add',
      item: newItem,
    });
 
    form.reset();
    alert('Obiekt został dodany!');
  };
 
  return (
    <form onSubmit={handleSubmit}>
      <h1>Dodaj Obiekt</h1>
 
      {errors.length > 0 && (
        <div className="error-messages">
          {errors.map((error, index) => (
            <p key={index} className="error">
              {error}
            </p>
          ))}
        </div>
      )}
 
      <label>
        Name:
        <input type="text" name="name" maxLength={50} required />
      </label>
      <br />
      <label>
        Birth:
        <input type="date" name="birth" required />
      </label>
      <br />
      <label>
        Eyes:
        <input type="text" name="eyes" maxLength={20} required />
      </label>
      <br />
      <label>
        Rating:
        <input type="number" name="rating" min={0} max={10} required />
      </label>
      <br />
      <button type="submit">Dodaj</button>
    </form>
  );
}
 
export default CreateForm;