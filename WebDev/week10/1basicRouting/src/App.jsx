import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/neet/online-coaching-class-11"
              element={<Class11Program />}
            />
            <Route
              path="/neet/online-coaching-class-12"
              element={<Class12Program />}
            />
            <Route path="/" element={<Landing />} />
            {/* any routes except the above routes if given by the user then they are rendered to an error page */}
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <div id="header" style={{width:"50%", height:30,padding:5, backgroundColor:'#81ecec', borderRadius:20 , color:"#f5f6fa"}}>
        <Link to="/">Allen</Link>|
        <Link to="/neet/online-coaching-class-11">Class 11</Link>|
        <Link to="/neet/online-coaching-class-12">Class 12</Link>
      </div>
      <Outlet/>
      <div id="footer" style={{width:"50%", height:30, padding:5, backgroundColor:'#fd79a8', borderRadius:20 , color:"#f5f6fa"}}>
        <b>
          FOOTER-----|----CONTACT US
        </b>
      </div>
    </div>
  );
}

function Landing() {
  return <div>Welcome to allen</div>;
}

function Class11Program() {
  return <div>NEET programs for Class 11th</div>;
}

function Class12Program() {
  const navigate = useNavigate();

  function redirectHome() {
    navigate("/");
  }
  return (
    <div>
      NEET programs for Class 12th
      <br />
      <button onClick={redirectHome}>Go back to home page</button>
    </div>
  );
}

function ErrorPage() {
  return <>sorry page not found</>;
}

export default App;
