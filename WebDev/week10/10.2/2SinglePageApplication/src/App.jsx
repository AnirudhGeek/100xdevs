import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Landing />} />
            <Route path="/neet/online-coahing-class11" element={<Class11 />} />
            <Route path="/neet/online-coahing-class12" element={<Class12 />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

function Layout() {
  return (
    <div>
      <div id="header" style={{ backgroundColor: "#ffeaa7", color: "#dfe6e9" , padding:10, width:"50vh", borderRadius:10 }}>
        <Link to="/">ALLEN</Link>|
        <Link to="/neet/online-coahing-class11">CLASS 11</Link>|
        <Link to="/neet/online-coahing-class12">CLASS 12</Link>
      </div>
      <Outlet/>
      <div id="footer" style={{ backgroundColor: "#636e72", color: "#dfe6e9" , padding:10, width:"50vh", borderRadius:10 }}>
          FOOTER | CONTACT US | +91 9999999999
      </div>
    </div>
  );
}

function Landing() {
  return <div>Welcome to allen</div>;
}

function Class11() {
  return <div>NEET coaching class 11</div>;
}

function Class12() {
  const navigate = useNavigate();
  function redirectUser() {
    navigate("/");
  }
  return (
    <div>
      NEET coaching class 12
      <div>
        <button onClick={redirectUser}>Go back to landing page</button>
      </div>
    </div>
  );
}

function NotFound() {
  return <>Page not found</>;
}

export default App;