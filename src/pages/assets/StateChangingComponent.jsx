import React, { useState } from 'react';

function StateChangingComponent() {
  const [currentState, setCurrentState] = useState(0);
  const states = ['Languages: Java, JavaScript, HTML, CSS, C, SQL and Python', 'Concepts: OOP design, memory management, interactive design, SDLC, network protocols, and git', ' Tools: Git, Trello, VS code, Visual Studio, Figma, MySQL, Postgresql, and Cisco packet tracer'];

  const changeState = () => {
    setCurrentState((prevState) => (prevState + 1) % states.length);
  };

  return (
    <div>
      <h2>{states[currentState]}</h2>
      <button onClick={changeState}>NEXT</button>
    </div>
  );
}

export default StateChangingComponent;