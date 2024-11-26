import React from "react";

import "./Card.css"

export const Card = ({title, description, importance, cardID, onEdit, onDelete}) => {

    const backgroundColors = {
        high: "#F55D3E",
        medium: "#F7CB15",
        low: "#76bed0"
    }

    const borderColors = {
        high: "#bd3f26",
        medium: "#cca916",
        low: "#478796"
    }

    var color = backgroundColors[importance]
    var borderColor = borderColors[importance]


    return (    
    <div class="card" style={{ backgroundColor: color, borderColor: borderColor }}>
        <div class="edit-icon"><button class="edit-icon"><i class="fa-solid fa-pen-to-square"></i></button></div>
        <h1 class="card-title">Title: {title}</h1>
        <p>Description: {description}</p>
        <h2>Importance: {importance}</h2>
        <h2>Card ID: {cardID}</h2>
        <footer class="delete-icon"><i class="fa-solid fa-trash"></i></footer>
    </div>
    )
}
