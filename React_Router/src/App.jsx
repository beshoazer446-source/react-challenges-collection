import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import { Route, Routes,Link } from "react-router-dom";
import Hello from "./Hello";
import Home from "./Home";
import PostsList from "./PostsList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div style={{ fontSize: "30px" }}>
        <Link to="/Home">
          <button style={{ fontSize: "30px" }}>Home</button>
        </Link>
        <Link to="Hello">
          <button style={{ fontSize: "30px" }}>Hello</button>
        </Link>

        <Link to="/posts">
          <button style={{ fontSize: "30px" }}>posts</button>
        </Link>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/hello" element={<Hello />}></Route>
          <Route path="/posts" element={<PostsList />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
