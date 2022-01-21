import React, { useState } from "react";
import { useNavigate } from "react-router";

// Create a new animal
export default function Create() {
  
  // Initialize the form
  const [form, setForm] = useState({
    age: "",
    animal_type: "",
    breed: "",
    color: "",
    name: "",
    outcome_type: "",
    gender: "",
    location_lat: 0.0,
    location_long: 0.0,
    age_weeks: 0.0,
    rescue_animal: false,
    reserved: false,
  });

  // Initialize navigation
  const navigate = useNavigate();

  // Update the state properties
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // Handle form submission
  async function onSubmit(e) {
    e.preventDefault();

    // Add a new animal to the database
    const newAnimal = { ...form };
    // Post request to db
    await fetch("http://localhost:5000/animal/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAnimal),
    }).catch((error) => {
      window.alert(error);
      return;
    });
    
    setForm({
      age: "",
      animal_type: "",
      breed: "",
      color: "",
      name: "",
      outcome_type: "",
      gender: "",
      location_lat: 0.0,
      location_long: 0.0,
      age_weeks: 0.0,
      rescue_animal: false,
      reserved: false,
    });
    // Navigate back to the homepage after form submit
    navigate("/");
  }

  // Display the form to collect all value and submit
  return (
    <div>
      <h3>Create New Animal</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="text"
            className="form-control"
            id="age"
            value={form.age}
            onChange={(e) => updateForm({ age: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="breed">Breed</label>
          <input
            type="text"
            className="form-control"
            id="breed"
            value={form.breed}
            onChange={(e) => updateForm({ breed: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="color">Color</label>
          <input
            type="text"
            className="form-control"
            id="color"
            value={form.color}
            onChange={(e) => updateForm({ color: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="outcome_type">Status</label>
          <input
            type="text"
            className="form-control"
            id="outcome_type"
            value={form.outcome_type}
            onChange={(e) => updateForm({ outcome_type: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="location_lat">Location (Latitude)</label>
          <input
            type="text"
            className="form-control"
            id="location_lat"
            value={form.location_lat}
            onChange={(e) => updateForm({ location_lat: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="location_long">Location (Longitude)</label>
          <input
            type="text"
            className="form-control"
            id="location_long"
            value={form.location_long}
            onChange={(e) => updateForm({ location_long: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="age_weeks">Age in Weeks</label>
          <input
            type="text"
            className="form-control"
            id="age_weeks"
            value={form.age_weeks}
            onChange={(e) => updateForm({ age_weeks: e.target.value })}
          />
        </div>

        <div className="form-group">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="typeOptions"
              id="typeDog"
              value="Dog"
              checked={form.animal_type === "Dog"}
              onChange={(e) => updateForm({ animal_type: e.target.value })}
            />
            <label htmlFor="typeDog" className="form-check-label">
              Dog
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="typeOptions"
              id="typeCat"
              value="Cat"
              checked={form.animal_type === "Cat"}
              onChange={(e) => updateForm({ animal_type: e.target.value })}
            />
            <label htmlFor="typeCat" className="form-check-label">
              Cat
            </label>
          </div>
        </div>

        <div className="form-group">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="genderOptions"
              id="typeSpayedFemale"
              value="spayed_female"
              checked={form.gender === "spayed_female"}
              onChange={(e) => updateForm({ gender: e.target.value })}
            />
            <label htmlFor="typeSpayedFemale" className="form-check-label">
              Spayed Female
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="genderOptions"
              id="typeUnspayedFemale"
              value="unspayed_female"
              checked={form.gender === "unspayed_female"}
              onChange={(e) => updateForm({ gender: e.target.value })}
            />
            <label htmlFor="typeUnspayedFemale" className="form-check-label">
              Unspayed Female
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="genderOptions"
              id="typeNeuteredMale"
              value="neutered_male"
              checked={form.gender === "neutered_male"}
              onChange={(e) => updateForm({ gender: e.target.value })}
            />
            <label htmlFor="typeNeuteredMale" className="form-check-label">
              Neutered Male
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="genderOptions"
              id="typeUnneuteredMale"
              value="unneutered_male"
              checked={form.gender === "unneutered_male"}
              onChange={(e) => updateForm({ gender: e.target.value })}
            />
            <label htmlFor="typeUnneuteredMale" className="form-check-label">
              Unneutered Male
            </label>
          </div>
        </div>

        <div className="form-group">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="reserved"
              id="reseredTrue"
              value="true"
              checked={form.reserved === "true"}
              onChange={(e) => updateForm({ reserved: e.target.value })}
            />
            <label htmlFor="true" className="form-check-label">
              Resevered: True
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="reserved"
              id="reservedFalse"
              value="false"
              checked={form.reserved === "false"}
              onChange={(e) => updateForm({ reserved: e.target.value })}
            />
            <label htmlFor="false" className="form-check-label">
              Reserved: False
            </label>
          </div>
        </div>

        <div className="form-group">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="rescue_animal"
              id="rescueTrue"
              value="true"
              checked={form.rescue_animal === "true"}
              onChange={(e) => updateForm({ rescue_animal: e.target.value })}
            />
            <label htmlFor="true" className="form-check-label">
              Search and Rescue Dog: True
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="rescue"
              id="rescueFalse"
              value="false"
              checked={form.rescue_animal === "false"}
              onChange={(e) => updateForm({ rescue_animal: e.target.value })}
            />
            <label htmlFor="false" className="form-check-label">
              Search and Rescue Dog: False
            </label>
          </div>
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Create animal"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
