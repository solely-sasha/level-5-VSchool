import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Volunteers from "./pages/Volunteers";
import HelpSeekerSignup from "./pages/HelpSeekerSignUp";
import Pantries from "./pages/Pantries";
import { PantryContextProvider } from "../context/PantryContext";
import { VolunteerContextProvider } from "../context/VolunteerContext";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <PantryContextProvider>
          <VolunteerContextProvider>
            <Navbar />
            <div className="pages">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/pantries" element={<Pantries />} />
                <Route path="/map" element={<Map />} />
                <Route path="/volunteer" element={<Volunteers />} />
                <Route path="/request" element={<HelpSeekerSignup />} />
              </Routes>
            </div>
          </VolunteerContextProvider>
        </PantryContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
