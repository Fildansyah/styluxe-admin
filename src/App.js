import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, Users } from "./pages";
import React from "react";

function App() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="users">
              <Route index element={<Users />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
