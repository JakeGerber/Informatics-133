import logo from './logo.svg';
import './App.css';

import "./Card.css"


import { Card } from './Card';

import { Weather } from './Weather';

import {Home} from './Home';

import {AddCard} from './AddCard';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <div className='content'>
        <Router>
        <Routes>
          <Route path="/">
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/add-card" element={<AddCard/>} />
          </Route>
        </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
