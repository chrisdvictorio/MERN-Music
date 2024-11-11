import React from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </div>
  );
};

export default App;
