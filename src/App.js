import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MoviePage from "./pages/[id]";
import Search from "./pages/Search";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="search/:input" element={<Search />}></Route>
          <Route path=":id" element={<MoviePage />}> </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
