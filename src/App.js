import './App.css';
import AllowNotification from './pages/AllowNotification';
import CodeConfirm from './pages/CodeConfirm';
import Home from './pages/Home';
import AppLayout from './pages/Layouts/AppLayout';
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
            <Route path='/code_confirm' element={<CodeConfirm />} />
            <Route path='/allow_notification' element={<AllowNotification />} />
          </Routes>
        </PlanLayout>

        <AppLayout>
          <Routes>
            <Route path='/home' element={<Home />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
