import 'bootstrap/dist/css/bootstrap.css';
import { data } from './data/module-data';
import RootLayout from './layouts/RootLayout';
import { Route, Routes } from 'react-router-dom';
import Lab1Page from './pages/Lab1Page';
import Lab2Page from './pages/Lab2Page';
import PeoplePage from './pages/PeoplePage';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import Lab3Page from './pages/Lab3Page';
import Lab4Page from './pages/Lab4Page';
import AppContext from './data/AppContext';
import { useReducer, useEffect } from 'react';
import AppReducer from './data/AppReducer';
import CreateForm from './components/CreateForm';
import EditForm from './components/EditForm';
 
function App() {
  const initialState = JSON.parse(localStorage.getItem('appState')) || data;
 
  const [state, appDispatch] = useReducer(AppReducer, initialState);
 
  useEffect(() => {
    localStorage.setItem('appState', JSON.stringify(state));
  }, [state]);
 
  return (
    <AppContext.Provider value={{ items: state, dispatch: appDispatch }}>
      <RootLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lab1" element={<Lab1Page />} />
          <Route path="/lab2" element={<Lab2Page />} />
          <Route path="/lab3" element={<Lab3Page />} />
          <Route path="/lab4" element={<Lab4Page />} />
          <Route path="/lab4/edit/:id" element={<EditForm />} />
          <Route path="/lab4/add" element={<CreateForm />} />
          <Route path="/people/:id" element={<PeoplePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </RootLayout>
    </AppContext.Provider>
  );
}
 
export default App;
 
 