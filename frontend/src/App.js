import React from "react";
// Route defines the different pages of the application
import { Route, Routes } from "react-router-dom";

// Import components
import Navigation from "./components/navigation";
import Create from "./components/create";
import AnimalList from "./components/search";
import Edit from "./components/edit";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<AnimalList />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
};

export default App;
