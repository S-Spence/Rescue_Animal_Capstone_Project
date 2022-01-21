import React from "react";
// Route defines the different pages of the application
import { Route, Routes } from "react-router-dom";

// Import components
import Navigation from "./components/navigation";
import Create from "./components/create";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/">Implement Search Grid as Homepage</Route>
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
};

export default App;
