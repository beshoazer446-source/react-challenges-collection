import { useState } from "react";
import Header from "./Header";
import Post from "./Post";
import Slidebar from "./Slidebar";
function App() {
  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          padding: "0 20px",
        }}
      >
        <div>
          <Post
            number={20}
            content="اكاديميه ترميز"
            pra="أكاديمية مخصصة لتعليم البرمجة بمختلف لغاتها وتقنياتها"
          ></Post>
          <Post
            content="hello world"
            pra="this is the hello world article"
          ></Post>
          <Post content="Post 3" pra="this is the hello world article"></Post>
        </div>
        <div
          style={{
            border: "2px solid #0d7a72",
            borderRadius: "8px",
            padding: "15px",
            width: "280px",
            background: "#ffffff",
            boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
            height: "fit-content",
          }}
        >
          <Slidebar>
            <button>new😘😘</button>
          </Slidebar>
          <Slidebar>
            <button>الاكثر قراءه</button>
            <div>
              <img
                style={{ width: "100px" }}
                src="./public/خلفية سيارة BMW رياضية من نوع vision بدقة 4K مناسبة للابتوب والكمبيوتر.jpg"
                alt=""
              />
            </div>
          </Slidebar>
          <Slidebar>
            <div>
            <p>مميز</p>
            <h1>click me</h1>
            <span>❤️</span>
            </div>
          </Slidebar>
        </div>
      </div>
    </>
  );
}

export default App;
