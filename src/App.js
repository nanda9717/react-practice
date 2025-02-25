import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout/Layout';
import NoPage from './pages/NoPage';
import Learning from './pages/Learning'
import Detail from './pages/Learning/Detail'
import Login from './pages/auth/Login';

function App() {
  return (
    <div className='main-container'>
      <Router>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index exact element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/learning" element={<Learning />} />
                <Route path="/learning/:topic" element={<Detail />} />
                <Route path="*" element={<NoPage />} />
              </Route>
            </Routes>
      </Router>
    </div>
  );
}

export default App;
