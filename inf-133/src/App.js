import logo from './logo.svg';
import './App.css';

import "./Card.css"


import { Card } from './Card';

import { Weather } from './Weather';

import React, { useState } from "react";


import {Home} from './Home';

import {AddCard} from './AddCard';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  const [cards, setCards] = useState([
    { title: "Task-1", description: "this is a test", importance: "none"},
    { title: "Task-2", description: "this is a test2", importance: "low" },
    { title: "Task-3", description: "this is a test3", importance: "medium" },
    { title: "Task-4", description: "this is a test4", importance: "high" },
    { title: "Task-5", description: "this is a thing", importance: "high" },
  ]);

  const [cardID, setCardID] = useState(1);


  return (
    <div className="App">
      <div className='content'>
        <Router>
        <Routes>
          <Route path="/">
          <Route exact path="/" element={<Home cards={cards} />} />
          <Route exact path="/add-card" element={<AddCard cards={cards} setCards={setCards} cardID={cardID} setCardID={setCardID} />} />
          </Route>
        </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
