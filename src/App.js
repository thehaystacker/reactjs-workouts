import React from "react";
import "./App.css";

import Person from './Person/Person.js';

function App() {
  return (
    <div className="App">
      <Person name="Sangeeth" age="24" />
      <Person name="Sarath" age="20" />
      <Person>{['Football', 'hockey', 'Video Games']}</Person>
    </div>
  );
}

export default App;