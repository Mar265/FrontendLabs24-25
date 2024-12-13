import { useContext } from 'react';
import FlexContainer from '../components/FlexContainer';
import ProfileCard from '../components/ProfileCard';
import AppContext from '../data/AppContext';
 
function Lab3Page() {
  const { items } = useContext(AppContext);
 
  return (
    <div>
      <h1>Laboratorium 3</h1>
      <FlexContainer items={items} element={ProfileCard} />
    </div>
  );
}
 
export default Lab3Page;
 
 