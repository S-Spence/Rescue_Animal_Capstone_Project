import React, { useEffect, useState } from "react";
import Animal from "./animal_item";
import "../styles/grid.css";

export default function AnimalList() {
  const [animals, setAnimals] = useState([]);

  // This method fetches the animals from the database.
  useEffect(() => {
    async function getAnimals() {
      const response = await fetch(`http://localhost:5000/animal/water`);

      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const animals = await response.json();
      setAnimals(animals);
    }

    getAnimals();

    return;
  }, [animals.length]);

  // This method will delete an animal
  async function deleteAnimal(id) {
    await fetch(`http://localhost:5000/${id}`, {
      method: "DELETE",
    });

    const newAnimals = animals.filter((el) => el._id !== id);
    setAnimals(newAnimals);
    // Refresh after delete
    window.location.reload(true);
  }

  // This method will map out the animals to the cards
  function animalList() {
    return animals.map((animal) => {
      return (
        <Animal
          animal={animal}
          deleteAnimal={() => deleteAnimal(animal._id)}
          key={animal._id}
        />
      );
    });
  }

  return (
    <div>
      <div className="header">
        <h3>Water Rescue Dogs</h3>
      </div>
      <div className="container">{animalList()}</div>
    </div>
  );
}
