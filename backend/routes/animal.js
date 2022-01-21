const express = require("express");

// Routes is an instance of the express router.
// The router will be added as a middleware and will take control of requests starting with path /animal.
const Routes = express.Router();

// Help connect to the database
const db = require("../database/connection");

// This helps convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// Get a list of all animals
Routes.route("/animal").get(function (req, res) {
  let db_connect = db.getDb("RescueAnimals");
  db_connect
    .collection("animals")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// Get a single animal by id
Routes.route("/animal/:id").get(function (req, res) {
  // Connect
  let db_connect = db.getDb();
  // Query by ID
  let query = { _id: ObjectId(req.params.id) };
  // Retrieve from collection
  db_connect.collection("animals").findOne(query, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

// Create a new animal
Routes.route("/animal/add").post(function (req, response) {
  // Connect
  let db_connect = db.getDb();
  // Set animal parameters
  let new_animal = {
    age: req.body.age,
    animal_type: req.body.animal_type,
    breed: req.body.breed,
    color: req.body.color,
    name: req.body.name,
    outcome_type: req.body.outcome_type,
    gender: req.body.gender,
    location_lat: req.body.location_lat,
    location_long: req.body.location_long,
    age_weeks: req.body.age_weeks,
    rescue_animal: req.body.rescue_animal,
    reserved: req.body.resrved,
  };
  // insert the new document into the animals collection
  db_connect.collection("animals").insertOne(new_animal, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// Update an animal by id
Routes.route("/update/:id").post(function (req, response) {
  // Connect
  let db_connect = db.getDb();
  // Get query by object ID
  let query = { _id: ObjectId(req.params.id) };
  // Update values
  let new_values = {
    $set: {
      age: req.body.age,
      animal_type: req.body.animal_type,
      breed: req.body.breed,
      color: req.body.color,
      name: req.body.name,
      outcome_type: req.body.outcome_type,
      gender: req.body.gender,
      location_lat: req.body.location_lat,
      location_long: req.body.location_long,
      age_weeks: req.body.age_weeks,
      rescue_animal: req.body.rescue_animal,
      reserved: req.body.resrved,
    },
  };
  // Update within collection
  db_connect
    .collection("animals")
    .updateOne(query, new_values, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// Delete an animal
Routes.route("/:id").delete((req, response) => {
  // Connect
  let db_connect = db.getDb();
  // Query by ID
  let query = { _id: ObjectId(req.params.id) };
  // Delete from collection
  db_connect.collection("animals").deleteOne(query, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.status(obj);
  });
});

module.exports = Routes;
