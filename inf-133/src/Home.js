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
          <div class="navbar">
            <h1 class="title">Tasks</h1>
            <iframe class="date-time" src="https://free.timeanddate.com/clock/i9o5ubwc/n840/fn8/tct/pct/ahr/ftb/pd2/tt0/tw1/tm1/ts1/ta1/tb4" frameborder="0" width="145" height="34" allowtransparency="true"></iframe>     

          </div>
          
        
      
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

    <button class="add-task-button" onClick={handleClickTask}>
      Add Task
    </button>

    </div>
    )

}