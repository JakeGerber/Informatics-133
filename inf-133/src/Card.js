import React from "react";

import "./Card.css"

export const Card = ({title, description, importance}) => {

    const backgroundColors = {
        high: "#ff7f7f",
        medium: "#ffda79",
        low: "#a2d5c6"
    }

    var color = backgroundColors[importance]


    return (
    <div class="card" style={{ backgroundColor: color }}>
        <h1 class="card-title">Title: {title}</h1>
        <p>Description: {description}</p>
        <h2>Importance: {importance}</h2>
    </div>
    )
}