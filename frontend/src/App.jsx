import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Login from "./components/login";
import SignUp from "./components/signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>

       ¿
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <h1>Estado general del inventario</h1>
              <h1>Estado general de las tareas</h1>
            </>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;