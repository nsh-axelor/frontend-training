import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";

const ReactRouter = () => {
  return (
    <>
      <Router>
        <div
          style={{
            listStyle: "none",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="education" element={<h1>Education</h1>} />
            <Route path="experience" element={<h1>Experience</h1>} />
            <Route path="life" element={<h1>Life</h1>} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/dynamic/:id" element={<Dynamic />} />
          <Route
            path="*"
            element={<h2 style={{ color: "red" }}>404 Server Not Found</h2>}
          />
        </Routes>

      </Router>
    </>
  );
};

const Dynamic = () => {
  const { id } = useParams();
  return (
    <div>
      <h3>Given Dynamic Id --- {id}</h3>
    </div>
  );
};

export default ReactRouter;
