import logo from './logo.svg';
import './App.css';

import "./Card.css"


import { Card } from './Card';

import { Weather } from './Weather';

import React, { useState, useEffect } from "react";


import {Home} from './Home';

import {AddCard} from './AddCard';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  const [cards, setCards] = useState(() => {
    const storedCards = localStorage.getItem('cards');
    return storedCards ? JSON.parse(storedCards) : [];
  });

  const [cardID, setCardID] = useState(1);


  useEffect(() => {
    const storedCards = localStorage.getItem('cards');
    console.log("Stored cards: ", storedCards)
    if(storedCards){
      setCards(JSON.parse(storedCards));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards));
    console.log(cards)
  }, [cards]);

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
