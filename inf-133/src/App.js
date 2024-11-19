import logo from './logo.svg';
import './App.css';

import "./Card.css"


import { Card } from './Card';

import { Weather } from './Weather';

function App() {
  return (
    <div className="App">
      
      <h1>Tasks</h1>
      
      <div class="card-container">
        <Card title="Task-1" description="this is a test" importance="none"/>
        <Card title="Task-2" description="this is a test2" importance="low"/>
        <Card title="Task-3" description="this is a test3" importance="medium"/>
        <Card title="Task-4" description="this is a test4" importance="high"/>
        <Card title="Task-5" description="this is a thing" importance="high"/>
        <Card title="Task-5" description="this is a thing" importance="high"/>
      </div>

      <Weather />

    </div>
  );
}

export default App;
