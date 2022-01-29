import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

export default function Edit() {
  // Initialize form and setform with use state
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
  // Parameters
  const params = useParams();
  // Navigation
  const navigate = useNavigate();
  // Retrieve the animal by id
  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(
        `http://localhost:5000/animal/${params.id.toString()}`
      );

      if (!response.ok) {
        const message = `An error has occured: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const animal = await response.json();
      if (!animal) {
        window.alert(`Animal with id ${id} not found`);
        navigate("/");
        return;
      }
      setForm(animal);
    }

    fetchData();
    return;

  }, [params.id, navigate]);

  // Update form and handle state
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    const editedAnimal = {
      name: form.name,
      age: form.age,
      animal_type: form.animal_type,
      breed: form.breed,
      color: form.color,
      outcome_type: form.outcome_type,
      gender: form.gender,
      location_lat: form.location_lat,
      location_long: form.location_long,
      age_weeks: form.age_weeks,
      rescue_animal: form.rescue_animal,
      reserved: form.reserved,
    };

    // Update the database.
    await fetch(`http://localhost:5000/update/${params.id}`, {
      method: "POST",
      body: JSON.stringify(editedAnimal),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // Naviagte back to search grid
    navigate("/");
  }

  // Display the form to update animal information
  return (
    <div>
      <h3>Update Animal</h3>
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

        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="reserved"
            value={form.reserved}
            onChange={(e) => updateForm({ reserved: e.target.true })}
          />
          <label class="form-check-label" for="reserved">
            Reserved
          </label>
        </div>

        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="rescue"
            value={form.rescue_animal}
            onChange={(e) => updateForm({ rescue_animal: e.target.true })}
          />
          <label class="form-check-label" for="rescue">
            Search and Rescue Animal
          </label>
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
