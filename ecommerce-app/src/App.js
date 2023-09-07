
import './App.css';
import Header from './Header';
import Container from './Container';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Madeyalook from './Madeyalook';
import Madeyalookagain from './Madeyalookagain';
import Search from './Search';
import List from './List';
import Form from './Form';

function App() {
  return (

    <div className="App">
      <Navbar />

      <Header />
      <Router>

        <Routes>

          <Route exact path="/" element={<Container />} />
          <Route path="/Madeyalook" element={<List />} />
          <Route path="/Madeyalookagain" element={<Form />} />





        </Routes>
      </Router>


    </div>

  );
}

export default App;
