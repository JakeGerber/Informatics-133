import React, {useState} from "react";

import { useNavigate } from "react-router-dom";


import { Card } from './Card';

import { Weather } from './Weather';


//add a card, set the title, description, importance, and ID for new card
export const AddCard = ({ cards, setCards, cardID, setCardID }) => {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    importance: "none",
    cardID: cardID
  });

  const navigate = useNavigate();

  //on submit, set the cards again, now including the new one
  //increment cardID by one, preparing for next cardID
  const handleSubmit = (e) => {
    e.preventDefault();
    setCards([...cards, formData]);
    console.log(cardID);

    setCardID(cardID+1);
    navigate("/");
  };

  //on form changing, save the data incase user exits tab (?)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    console.log(name);
    console.log(value);
    };

  
  return (
    <div class="label">
      <h1>New Task</h1>
    <form onSubmit={handleSubmit} class="add-form">
      <div class="form-item">
        <label class="label">
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div class="form-item">
        <label class="label">
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div class="form-item">
        <label class="label">
          Importance:
          <select
            name="importance"
            value={formData.importance}
            onChange={handleChange}
          >
            <option value="none">None</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
      </div>
      <button type="submit">Add Task</button>
    </form>
    </div>
  )

}