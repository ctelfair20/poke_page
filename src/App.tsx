import React from 'react';
import Card from './Card';
import Stats from './Stats';
import Abilities from './Abilities';
import Actions from './Attacks';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Pokemon Page</h1>
      <main>
        <div className="left-col">
          <Card />
        </div>
        <div className="rigth-col">
          <Stats />
          <Abilities />
          <Actions />
        </div>
      </main>
    </div>
  );
}

export default App;
