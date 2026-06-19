import React from "react";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import logo from "./assets/utils/allenLogo.png";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home/>} />
            <Route path="/exams" element={<Exams/>} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/scholarship" element={<Scholarship />} />
            <Route path="/testSeries" element={<TestSeries/>} />
            <Route path="/studyMaterial" element={<StudyMaterial/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

function Layout() {
  return (
    <div>
      <div id="header">
        <div id="right">
        <Link to="/">
        <img src={logo} alt="logo" />
        </Link>
        <Link to="/exams">Exams </Link>
        <Link to="/programs">Programs</Link>
        <Link to="/scholarship">Scholarships</Link>
        <Link to="/testSeries">Test Series</Link>
        <Link to="/studyMaterial">Study Material</Link>
        </div>
        <div id="left">

        </div>
      </div>
      <Outlet />
      <div id="footer">Footer of the website</div>
    </div>
  );
}

function Home(){
  return(
    <div>
      Allen Home page is here
    </div>
  )
}

function Exams() {
  return (
    <div>
      <h2>Exam section is here</h2>
    </div>
  );
}

function Programs() {
  return (
    <div>
      <h2>Programs section is here</h2>
    </div>
  );
}

function Scholarship() {
  return (
    <div>
      <h2>Scholarship section is here</h2>
    </div>
  );
}

function TestSeries() {
  return (
    <div>
      <h2>Test Series section is here</h2>
    </div>
  );
}

function StudyMaterial() {
  return (
    <div>
      <h2>Study material section is here</h2>
    </div>
  );
}

export default App;
