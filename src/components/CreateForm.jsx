import { useState } from 'react';
 
function CreateForm() {
  const [errors, setErrors] = useState([]);
  const [isSending, setSending] = useState(false);
 
  const onSubmit = async e => {
    e.preventDefault();
    const data = new FormData(e.target);
    if (
      data.get('username').charAt(0) ===
      data.get('username').charAt(0).toUpperCase()
    ) {
      setErrors(
        ...errors,
        'Nazwa użytkownika musi zaczynać się od wielkiej litery'
      );
    }
    if (errors.length != 0) {
      return;
    }
 
    setSending(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
 
    // dispatch({
    //   type: 'add',
    //   data: // obiekt z danymi z formularza
    // });
 
    setSending(false);
    for (let key of data.keys()) {
      e.target[key].value = '';
    }
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="username">Nazwa użytkownika</label>
        <input
          required
          minLength="3"
          maxLength="20"
          name="username"
          type="text"
          id="username"
          placeholder="Nazwa użytkownika"
        />
      </form>
      <button type="submit" disabled={isSending}>
        Zapisz
      </button>
    </>
  );
}
 
export default CreateForm;