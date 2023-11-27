import React from "react";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home } from "./Components/Home";

// The Layout component is used to separate the application's layout from the initial routing.
// It returns a div containing the Home component.
function Layout() {
  return (
    <div>
      <Home></Home>
    </div>
  );
}

// The App function is responsible for defining the routing of the application using BrowserRouter and Routes.
// The initial route "/" is associated with the Layout component.
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
