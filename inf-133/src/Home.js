import React from "react";

import { Card } from './Card';

import { Weather } from './Weather';

import { useNavigate } from "react-router-dom";


export const Home = ({ cards }) => {

  const navigate = useNavigate();

  const handleClickTask = () => {
    navigate("/add-card");
  }



  //Need to add sorting the cards based on importance.

    return (
        <div>
    <h1>Tasks</h1>
      
    <div class="card-container">

      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          importance={card.importance}
          cardID={card.cardID}
        />
      ))}
    </div>

    <Weather />

    <button onClick={handleClickTask}>
      Add Task
    </button>

    </div>
    )

}