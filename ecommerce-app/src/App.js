
import './App.css';
import Container from './Container';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import Madeyalook from './Madeyalook';
import Madeyalookagain from './Madeyalookagain';
import Form from './Form';
// import Header from './Header';
// import Navbar from './Navbar';
// import Search from './Search';
// import List from './List';
import React, { useState } from 'react';
import Home from './Home';
import Cart from './Cart';

function App() {
  const [cart, setCart] = useState([]);







  return (

    <div className="App">
      <Router>

        <nav className='navbar'>
          <h2></h2>
          <Link to="/">Home</Link>
          <NavLink to="/madeyalook">About</NavLink>
          <NavLink to="/Form">Add Item</NavLink>
          <NavLink to="/madeyalookagain">Cart</NavLink>



        </nav>
        <header className="headerStyle">
          <h1 className="titleStyle">Contour Therapy</h1>
          <p className="subtitleStyle">Your Path to Wellness and Balance</p>


        </header>
        <manin>

          <Routes>

            <Route exact path="/" element={<Container />} />
            <Route path="/madeyalook" element={<Madeyalook />} />
            <Route path="/madeyalookagain" element={<Madeyalookagain />} />
            <Route path="/form" element={<Form />} />





          </Routes>
        </manin>
        <footer className="footerStyle">
          Copyright &copy; 2023 Contour Therapy
        </footer>

      </Router>



    </div>

  );
}

export default App;




