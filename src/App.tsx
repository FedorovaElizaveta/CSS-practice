import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ProjectList from "./components/ProjectList/ProjectList";
import Pokeball from "./components/Pokeball/Pokeball";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Suspense fallback="<div>Loading...<div />">
        <Router>
          <Routes>
            <Route path="/" element={<ProjectList />} />
            <Route path="/pokeball" element={<Pokeball />} />
          </Routes>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
