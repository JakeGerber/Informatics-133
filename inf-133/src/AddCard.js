import React from "react";

import { Card } from './Card';

import { Weather } from './Weather';

export const AddCard = () => {

    return (
        <div>
    <h1>Tasks</h1>
      
    <div class="card-container">
      <Card title="Task-1" description="this is a test" importance="none"/>
      <Card title="Task-2" description="this is a test2" importance="low"/>
    </div>

    <Weather />

    </div>
    )

}