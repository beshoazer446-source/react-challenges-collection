  import { useState } from "react";
  import "./index.css";
  import Header from "./Header";
  import Post from "./Post";
  import Slidebar from "./Slidebar";
  function App() {
    return (
      <div>
        <Header />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <div style={{ display: "flex", width: "60%", gap: "30px" }}>
            <div style={{ width: "70%" }}>
              <Post /> 
              <Post />
              <Post />
              <Post />
              <Post />
            </div>
            <div style={{ width: "30%" }}>
              <Slidebar />
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default App;
