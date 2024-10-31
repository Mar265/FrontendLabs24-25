import { Link } from 'react-router-dom';
 
const NotFoundPage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <Link to="/">Go to Home</Link>
    </div>
  );
};
 
export default NotFoundPage;
 