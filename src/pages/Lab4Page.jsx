import { useNavigate } from "react-router-dom";

function Lab4Page() {
    const navigate = useNavigate();
  return (
    <div>
      <h1>Lab 4 Page</h1>
      <button onClick={e=> navigate("/lab4/add")}>Dodaj</button>
    </div>
  );
}

export default Lab4Page;