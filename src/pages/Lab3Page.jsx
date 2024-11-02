import FlexContainer from '../components/FlexContainer';
import ProfileCard from '../components/ProfileCard';
import { data } from '../data/module-data';
 
function Lab3Page() {
  return (
    <div>
      <h1>Lab 3 Page</h1>
      <FlexContainer element={ProfileCard} data={data} />
    </div>
  );
}
 
export default Lab3Page;