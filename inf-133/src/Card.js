import React from "react";

import "./Card.css"

export const Card = ({title, description, importance, typeOfTask, cardID, onDelete, onEdit}) => {
    //possible background colors depending on importance
    const backgroundColors = {
        high: "#F55D3E",
        medium: "#F7CB15",
        low: "#76bed0"
    }
    //matching border color, same as background color slightly shifted
    const borderColors = {
        high: "#bd3f26",
        medium: "#cca916",
        low: "#478796"
    }

    var color = backgroundColors[importance]
    var borderColor = borderColors[importance]

    //return the card HTML, nice and pretty
    //includes icons for edit and trash,
    //button for editing, will implement later
    return (    
        <div class="card" style={{ backgroundColor: color, borderColor: borderColor }}>
            <header class="edit-icon"><i onClick={() => onEdit(cardID)} class="fa-solid fa-pen-to-square"></i></header>
            <h1 class="card-title">Title: {title}</h1>
            <p>Description: {description}</p>
            <h2>Importance: {importance}</h2>
            <h2>Type of Task: {typeOfTask}</h2>
            <footer class="delete-icon"><i onClick={() => onDelete(cardID)} class="fa-solid fa-trash"></i></footer>
        </div>
    )
}
