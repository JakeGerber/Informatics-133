import React, {useState} from "react";

import { useNavigate } from "react-router-dom";


import { Card } from './Card';

import { Weather } from './Weather';



export const AddCard = ({ cards, setCards, cardID, setCardID }) => {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    importance: "none",
    cardID: cardID
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setCards([...cards, formData]);
    console.log(cardID);

    setCardID(cardID+1);
    navigate("/");
  };

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
    <div>
    <form onSubmit={handleSubmit}>
      <div>
        <label>
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
      <div>
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
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