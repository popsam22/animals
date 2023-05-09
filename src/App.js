import React, { useState } from "react";
import ShowAnimal from "./ShowAnimal";

const App = () => {
  const [animal, setAnimal] = useState([])

  const getRandomAnimals = () => {
    const animals = ["cat", "tiger", "cow", "bird", "horse", "dog", "monkey"];
    return animals[Math.floor(Math.random() * animals.length)];
  };


  const clickHandler = () => {
   setAnimal([...animal, getRandomAnimals()])
  };

  const animalList = animal.map((name, index) => {
    return <ShowAnimal pet={name} key={index}/>
  })


  return (
    <div>
      <button onClick={clickHandler}>Add Animal </button>
      {/* <div>{animal}</div> */}
      {animalList}
    </div>
  );
};

export default App;
