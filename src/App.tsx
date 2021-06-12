import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./components/Router";

function App() {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
}

export default App;
