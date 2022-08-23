import React from 'react';
import './App.css';
import Card from './Card';
import Stats from './Stats';

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
        </div>
      </main>
    </div>
  );
}

export default App;
