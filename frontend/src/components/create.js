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
      reserved: false,
    });
    // Navigate back to the homepage after form submit
    navigate("/");
  }

  // Display the form to collect all value and submit
  return (
    <div>
      <h3>Add New Animal</h3>
      <form onSubmit={onSubmit}>
        <div className="row">
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
        </div>

        <div className="row">
          <div className="col">
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
          </div>
          <div className="col">
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
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="age">Age (Years)</label>
              <input
                type="number"
                min="0"
                max="30"
                className="form-control"
                id="age"
                value={form.age}
                onChange={(e) => updateForm({ age: e.target.value })}
              />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label htmlFor="age_weeks">Age (Weeks)</label>
              <input
                type="number"
                id="age_weeks"
                className="form-control"
                value={form.age_weeks}
                onChange={(e) =>
                  updateForm({ age_weeks: parseFloat(e.target.value) })
                }
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="location_lat">Location (Latitude)</label>
              <input
                type="number"
                className="form-control"
                id="location_lat"
                value={form.location_lat}
                onChange={(e) =>
                  updateForm({ location_lat: parseFloat(e.target.value) })
                }
              />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label htmlFor="location_long">Location (Longitude)</label>
              <input
                type="number"
                className="form-control"
                id="location_long"
                value={form.location_long}
                onChange={(e) =>
                  updateForm({ location_long: parseFloat(e.target.value) })
                }
              />
            </div>
          </div>
        </div>



        <div className="row">
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
        </div>


        <div className="row">
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="genderOptions"
                id="typeSpayedFemale"
                value="Spayed Female"
                checked={form.gender === "Spayed Female"}
                onChange={(e) => updateForm({ gender: e.target.value })}
              />
              <label htmlFor="typeSearchAndRescue" className="form-check-label">
                Spayed Female
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="genderOptions"
                id="typeIntactFemale"
                value="Intact Female"
                checked={form.gender === "Intact Female"}
                onChange={(e) => updateForm({ gender: e.target.value })}
              />
              <label htmlFor="typeIntactFemale" className="form-check-label">
                Intact Female
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="genderOptions"
                id="typeNeuteredMale"
                value="Neutered Male"
                checked={form.gender === "Neutered Male"}
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
                id="typeIntactMale"
                value="Intact Male"
                checked={form.gender === "Intact Male"}
                onChange={(e) => updateForm({ gender: e.target.value })}
              />
              <label htmlFor="typeIntactMale" className="form-check-label">
                Intact Male
              </label>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="statusOptions"
                id="typeSearchAndRescue"
                value="Search and Rescue"
                checked={form.outcome_type === "Search and Rescue"}
                onChange={(e) => updateForm({ outcome_type: e.target.value })}
              />
              <label htmlFor="typeSearchAndRescue" className="form-check-label">
                Search and Rescue
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="statusOptions"
                id="typeAdoption"
                value="Adoption"
                checked={form.outcome_type === "Adoption"}
                onChange={(e) => updateForm({ outcome_type: e.target.value })}
              />
              <label htmlFor="typeAdoption" className="form-check-label">
                Adoption
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="statusOptions"
                id="typeReturnToOwner"
                value="Return to Owner"
                checked={form.outcome_type === "Return to Owner"}
                onChange={(e) => updateForm({ outcome_type: e.target.value })}
              />
              <label htmlFor="typeReturnToOwner" className="form-check-label">
                Return to Owner
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="statusOptions"
                id="typeEuthenasia"
                value="Euthenasia"
                checked={form.outcome_type === "Euthenasia"}
                onChange={(e) => updateForm({ outcome_type: e.target.value })}
              />
              <label htmlFor="typeEuthenasia" className="form-check-label">
                Euthenasia
              </label>
            </div>
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
