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
import { auth } from "./config/firebase"
import { onAuthStateChanged } from 'firebase/auth';
import axios from 'axios';
import { SetUserID, AddFirebaseID } from './store/actions/userActions';
import { connect } from "react-redux"
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import PDFFile from './components/PDFFile';
function App(props) {
  const uri = window.location.origin == "http://localhost:3000" ? "http://localhost:3001" : window.location.origin;
  useEffect(() => {
    checkLoggedIn()
  }, [])

  const checkLoggedIn = () => {
    onAuthStateChanged(auth, (user, data) => {
      if (user) {
        console.log(user)
        handleUserId(user.uid)
        props.setFirebaseID(user.uid)
      }
    })
  }



  const handleUserId = async (fireid) => {

    await axios.get(`${uri}/api/users/firebase/${fireid}`).then(res => { console.log(res); console.log(res.data[0]._id); props.setUserID(res.data[0]._id) }).then(() => console.log(props.userState.user_id)).catch(err => console.log(err))
  }

  const initialOptions = {
    "client-id": "AVT_V9nXxcbOxgJVhv5snTaCGKa8Xk01XgQyBkXEZT-NUx42rFHT30kLFOo_s2w9P1RluUjcG2BxUvju",
    currency: "USD",
    intent: "capture",
  };

  return (



    <Router>
      <div className="App">
        <ToastContainer />
        <TopBanner />
        <NavBar />
        <PayPalScriptProvider deferLoading={false} options={initialOptions}>
          <Routes>
            <Route element={<HomePage />} path="/" />
            <Route element={<ProductPage />} path='/product' />
            <Route element={<GettingStarted />} path='/business-builder/getting-started' />
            <Route element={<BusinessDevelopment />} path='/business-builder/development' />
            <Route element={<FinishingUp />} path='/business-builder/finishing-up' />
            <Route element={<BusinessViewer />} path='/business-builder/project-viewer' />
            <Route element={<LoginPage />} path='/login' />
            <Route element={<SignUpPage />} path='/sign-up/:sid' />
            <Route element={<UserDashboard />} path="/dashboard" />
            <Route element={<PurchaseSuccessPage />} path="/purchase-successful" />
            <Route element={<PurchaseCancelPage />} path="/purchase-canceled" />
            <Route element={<AdminDashboard />} path="/admin-dashboard" />
            <Route element={<PDFFile />} path="/pdf-document" />
          </Routes></PayPalScriptProvider>
        <Footer />
      </div>
    </Router>

  );
}
const mapStateToProps = (state) => {
  console.log(state)
  return {
    userState: state.user
  }
}

const mapActionsToProps = (dispatch) => {
  return {
    setUserID: (val) => dispatch(SetUserID(val)),
    setFirebaseID: (val) => dispatch(AddFirebaseID(val))
  }
}


export default connect(mapStateToProps, mapActionsToProps)(App);