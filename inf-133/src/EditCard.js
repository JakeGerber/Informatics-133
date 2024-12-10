import React, {useState} from "react";

import { useNavigate } from "react-router-dom";


export const EditCard = ({ cards, setCards, currentCardID, setCurrentCardID }) => {

    const currentCard = cards.find(card => card.cardID === currentCardID);

    //this does not account for weird errors where the user accesses this without clicking edit
    //such as putting in the URL in the search bar (which they shouldnt ever do?)
    const [formData, setFormData] = useState({
        title: currentCard.title,
        description: currentCard.description,
        importance: currentCard.importance,
        typeOfTask: currentCard.typeOfTask,
        cardID: currentCardID
      });
    
      const navigate = useNavigate();
    
      const handleSubmit = (e) => {
        //setCards([...cards, formData]);
        currentCard.title = formData.title;
        currentCard.description = formData.description;
        currentCard.importance = formData.importance;
        currentCard.typeOfTask = formData.typeOfTask;
        navigate("/");
      };
    
      const handleChange = (e) => {
        console.log(cards)
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


        <div>
        <label>
          Type of Task:
          <select
            name="typeOfTask"
            value={formData.typeOfTask}
            onChange={handleChange}
          >
            <option value="other">Other</option>
            <option value="personal">Personal</option>
            <option value="work">Work</option>
          </select>
        </label>
      </div>


        <button type="submit">Edit Task</button>
        </form>
        </div>

    )
  
  }