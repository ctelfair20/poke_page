import React from 'react';
import Card from './components/Card';
import Stats from './components/Stats';
import Abilities from './components/Abilities';
import Actions from './components/Attacks';
import Pokeball from './components/Pokeball';
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
          <Pokeball />
        </div>
      </main>
    </div>
  );
}

export default App;
