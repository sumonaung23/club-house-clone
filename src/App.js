import './App.css';
import PlanLayout from './pages/Layouts/PlanLayout';
import PhoneConfirmation from './pages/PhoneConfirmation';
import Welcome from './pages/Welcome';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <PlanLayout>
          <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='/invite' element={<PhoneConfirmation />} />
          </Routes>
        </PlanLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
