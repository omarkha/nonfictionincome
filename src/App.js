import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import TopBanner from './components/TopBanner';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BusinessDevelopment from './pages/business-builder/BusinessDevelopment';
import GettingStarted from './pages/business-builder/GettingStarted';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FinishingUp from './pages/business-builder/FinishingUp';
import LoginPage from './pages/LoginPage';
import UserDashboard from './pages/UserDashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <ToastContainer />
        <TopBanner />
        <NavBar />
        <Routes>
          <Route element={<HomePage />} path='/' />
          <Route element={<GettingStarted />} path='/business-builder/getting-started' />
          <Route element={<BusinessDevelopment />} path='/business-builder/development' />
          <Route element={<FinishingUp />} path='/business-builder/finishing-up' />
          <Route element={<LoginPage />} path='/login' />
          <Route element={<UserDashboard />} path="/dashboard" />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
