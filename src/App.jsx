import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div>

      <nav>
        <Link to="/">Home</Link>
        <br />

        <Link to="/About">About</Link>
        <br />

        <Link to="/Contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

    </div>
  );
};

export default App;