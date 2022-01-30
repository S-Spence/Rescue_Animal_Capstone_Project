import React from "react";
// Route defines the different pages of the application
import { Route, Routes } from "react-router-dom";

// Import components
import Navigation from "./components/navigation";
import Create from "./components/create";
import RescueAnimals from "./components/rescue_animals";
import Edit from "./components/edit";
import MountainRescue from "./components/mountain_rescue";
import WaterRescue from "./components/water_rescue";
import DisasterRescue from "./components/disaster_rescue";
import AllAnimals from "./components/all_animals";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<RescueAnimals />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
        <Route path="/water" element={<WaterRescue />}/>
        <Route path="/mountain" element={<MountainRescue />}/>
        <Route path="/disaster" element={<DisasterRescue />}/>
        <Route path="/all" element={<AllAnimals />}/> 
      </Routes>
    </div>
  );
};

export default App;
