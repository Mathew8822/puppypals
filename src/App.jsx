import { useState } from "react";
import "./App.css";
import { puppyList } from "./data.js";


function App() {

  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  return (
    <div className="App">
      {puppies.map((puppy) => (
        <p className="text-info bg-dark fw-bold"
          onClick={() => setFeatPupId(puppy.id)}
          key={puppy.id}>
          {puppy.name}
        </p>
      ))}
      {featPupId && (
        <div>
          <h2 className="text-warning bg-dark">{featuredPup.name}</h2>
          <ul>
            <li className="fst-italic border text-warning bg-dark">Age: {featuredPup.age}</li>
            <li className="fst-italic border text-warning bg-dark">Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;