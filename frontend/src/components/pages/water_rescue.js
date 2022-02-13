import React, { useEffect, useState } from "react";
import Animal from "../ui/animal_item";
import "../../styles/grid.css";

export default function AnimalList() {
  const [animals, setAnimals] = useState([]);
  console.log(window.location.pathname)
  // This method fetches the animals from the database.
  useEffect(() => {
    async function getAnimals() {
      const response = await fetch(`/animal/water`);

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
    await fetch(`/${id}`, {
      method: "DELETE",
    });
    // set new animals
    const newAnimals = animals.filter((el) => el._id !== id);
    setAnimals(newAnimals);
    // Refresh page
    window.location.reload();
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
