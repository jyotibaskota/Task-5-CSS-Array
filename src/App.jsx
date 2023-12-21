import React from "react";
import "./App.css";

function App() {
  const names = ["Alice", "Bob", "Charlie", "David"];

  return (
    <div className="container">
      <h2>List of Names:</h2>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
