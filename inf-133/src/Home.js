import React, {useEffect, useState} from "react";

import { Card } from './Card';

import { Weather } from './Weather';

import { useNavigate } from "react-router-dom";

import Calendar from "react-calendar";

import 'react-calendar/dist/Calendar.css';

import './calendar.css'


export const Home = ({ cards, setCards, currentCardID, setCurrentCardID }) => {

  const navigate = useNavigate();


  const [calendarValue, onChangeCalendarValue] = useState(new Date());


  const handleClickTask = () => {
    navigate("/add-card");
  }

  const importanceSort = () => {
    const sorted = [...cards].sort(
      (a, b) => importanceOrder[b.importance] - importanceOrder[a.importance]
    );
    setCards(sorted);
  

  }

  const alphabeticalSort = () => {
    const sorted = [...cards].sort((a, b) => a.title.localeCompare(b.title));
    setCards(sorted);
  }

  const importanceOrder = {
    "high": 4,
    "medium": 3,
    "low" : 2,
    "none": 1
  }

  useEffect(() => {
    importanceSort();
  }, []);


  const deleteCard = (id) => {
    setCards(cards.filter((card) => card.cardID !== id));
    console.log("Deleted Card - ID: " + id);
  };

  const editCard = (id) => {
    //setCards(cards.filter((card) => card.cardID !== id));
    console.log("Editing Card - ID: " + id);
    console.log(currentCardID)
    setCurrentCardID(id);
    navigate("/edit-card");
  };

  //Need to add a search bar to search for tasks
  //Actually would require refactor of a bunch of code
  //Would need to make new hook and copy over card stuff

    return (
        <div>

          <div class="navbar">
            <h1 class="title">Tasks</h1>
            <Weather />
            <iframe class="date-time" src="https://free.timeanddate.com/clock/i9o5ubwc/n840/fn8/tct/pct/ahr/ftb/pd2/tt0/tw1/tm1/ts1/ta1/tb4" frameborder="0" width="145" height="34" allowtransparency="true"></iframe>     
          </div>




    <div class="card-container">
    <Calendar class="calendar" onChange={onChangeCalendarValue} value={calendarValue} />

      {cards
      .map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          importance={card.importance}
          typeOfTask={card.typeOfTask}
          cardID={card.cardID}
          onDelete={deleteCard}
          onEdit={editCard}
        />
      ))}
    </div>

    

    <button class="task-button"onClick={handleClickTask}>
      Add Task
    </button>

    

    <button class="task-button" onClick={importanceSort}>
      Sort By importance
    </button>

    <button class="task-button" onClick={alphabeticalSort}>
      Sort By Alphabetical Order
    </button>

    </div>
    )

}