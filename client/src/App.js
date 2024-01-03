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
import BusinessViewer from './pages/business-builder/BusinessViewer';
import ProductPage from './pages/ProductPage';
import SignUpPage from './pages/SignUpPage';
import PurchaseSuccessPage from './pages/PurchaseSuccessPage';
import PurchaseCancelPage from './pages/PurchaseCancelPage';
import AdminDashboard from './pages/admin/AdminDashboard';
import { useEffect } from "react"

function App() {



  return (
    <Router>
      <div className="App">
        <ToastContainer />

        <NavBar />
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<ProductPage />} path='/product' />
          <Route element={<GettingStarted />} path='/business-builder/getting-started' />
          <Route element={<BusinessDevelopment />} path='/business-builder/development' />
          <Route element={<FinishingUp />} path='/business-builder/finishing-up' />
          <Route element={<BusinessViewer />} path='/business-builder/project-viewer' />
          <Route element={<LoginPage />} path='/login' />
          <Route element={<SignUpPage />} path='/sign-up/:id' />
          <Route element={<UserDashboard />} path="/dashboard" />
          <Route element={<PurchaseSuccessPage />} path="/purchase-successful/:id" />
          <Route element={<PurchaseCancelPage />} path="/purchase-canceled" />
          <Route element={<AdminDashboard />} path="/admin-dashboard" />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
