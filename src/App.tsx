import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ProjectList from "./components/ProjectList/ProjectList";
import Pokeball from "./components/Pokeball/Pokeball";
import { Suspense } from "react";
import Hexagon from "./components/Hexagon/Hexagon";

function App() {
  return (
    <>
      <Suspense fallback="<div>Loading...<div />">
        <Router>
          <Routes>
            <Route path="/" element={<ProjectList />} />
            <Route path="/pokeball" element={<Pokeball />} />
            <Route path="/hexagon" element={<Hexagon />} />
          </Routes>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
