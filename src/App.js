import React from 'react';
import ButtonsGroup from "./ButtonsGroup";

function App() {
  return (
    <div className="App">
      <h1>Choose Your Game</h1>
      {/* Here i choose the names of alla the buttons */}
      <ButtonsGroup names={['Chess', 'Poker', 'Black Jack', 'Go', 'Pippo']}/>
    </div>
  );
}

export default App;
