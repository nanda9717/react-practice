# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To install react router

npm install react-router-dom

### `App.js`
```
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout/Layout';
import NoPage from './pages/NoPage';
function App() {
  return (
    <div className='main-container'>
      <Router>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index exact element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NoPage />} />
              </Route>
            </Routes>
      </Router>
    </div>
  );
}

export default App;

```
### `Layout.js`
```
import React from 'react'
import Header from './Header';
import Footer from './Footer';
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <div className="main">
        <div className="header">
            <Header />
        </div>
        <div className="content">
            <Outlet />
        </div>
        <div className="footer">
            <Footer />
        </div>
    </div>
  )
}
```
### `Header.js`
```
import React from 'react';
import { Link } from "react-router-dom";
export default function Header() {
  return (
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
  )
}
```
### `Footer.js`
```
import React from 'react'
export default function Footer() {
  return (
    <div>Footer</div>
  )
}
```