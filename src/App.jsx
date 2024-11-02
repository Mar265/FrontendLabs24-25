import 'bootstrap/dist/css/bootstrap.css';
// import { data } from './data/module-data';
import RootLayout from './layouts/RootLayout';
import { Route, Routes } from 'react-router-dom';
import Lab1Page from './pages/Lab1Page';
import Lab2Page from './pages/Lab2Page';
import Lab3Page from './pages/Lab3Page';
import PeoplePage from './pages/PeoplePage';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
 
function App() {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lab1" element={<Lab1Page />} />
        <Route path="/lab2" element={<Lab2Page />} />
        <Route path='/lab3' element={<Lab3Page />}/>
        <Route path="/people/:id" element={<PeoplePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </RootLayout>
  );
}
 
export default App;
 
 