import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from './pages/Auth/LogIn';
import SingUp from './pages/Auth/SingUp';
import Home from './pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<LogIn />} />
        <Route path="/sign-up" element={<SingUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
