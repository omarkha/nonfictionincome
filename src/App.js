import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import TopBanner from './components/TopBanner';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <TopBanner />
      <NavBar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
