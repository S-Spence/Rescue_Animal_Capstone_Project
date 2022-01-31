import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/grid.css";
 
const Animal = (props) => (
 // Create the table to display all animals
 <tr>
   <td>{props.animal.name}</td>
   <td>{props.animal.age}</td>
   <td>{props.animal.breed}</td>
   <td>{props.animal.color}</td>
   <td>{props.animal.outcome_type}</td>
   <td>{props.animal.gender}</td>
   <td>{props.animal.location_lat}</td>
   <td>{props.animal.location_long}</td>
   <td>{props.animal.age_weeks}</td>
   <td>{props.animal.reserved}</td>
   <td>
     <Link className="btn btn-link" to={`/edit/${props.animal._id}`}>Edit</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleteAnimal(props.animal._id);
       }}
     >
       Delete
     </button>
   </td>
 </tr>
);
 
export default function AnimalList() {
 const [animals, setAnimals] = useState([]);
 
 // This method fetches the animals from the database.
 useEffect(() => {
   async function getAnimals() {
     const response = await fetch(`http://localhost:5000/animal/all`);
 
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
     method: "DELETE"
   });
 
   const newAnimals = animals.filter((el) => el._id !== id);
   setAnimals(newAnimals);
 }
 
 // This method will map out the animals on the table
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
 
 // This following section will display the table with all animals
  return (
  <div>
    <div className="header">
      <h3>All Animals</h3>
    </div>
  <table className="table table-striped" style={{ marginTop: 20 }}>
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Breed</th>
        <th>Color</th>
        <th>Outcome Type</th>
        <th>Gender</th>
        <th>Location Latitude</th>
        <th>Location Longitude</th>
        <th>Age Weeks</th>
        <th>Reserved</th>
      </tr>
    </thead>
    <tbody>{animalList()}</tbody>
  </table>
  </div>
);
}
