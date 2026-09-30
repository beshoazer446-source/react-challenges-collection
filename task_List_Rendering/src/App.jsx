import { useState } from "react";
import Header from "./Header";
import Post from "./Post";
import Slidebar from "./Slidebar";
function App() {
  const Task = [
    {
      id: 1,
      number: "20",
      content: "اكاديميه ترميز",
      pra: "أكاديمية مخصصة لتعليم البرمجة بمختلف لغاتها وتقنياتها",
    },
    {
      id: 2,
      content: "hello world",
      pra: "this is the hello world article",
    },
    {
      id: 3,
      content: "Post 3",
      pra: "this is the hello world article",
    },
  ];
  const MyPots = Task.map((post) => {
    return (
      <Post
        key={post.id}
        number={post.number}
        content={post.content}
        pra={post.pra}
      ></Post>
    );
  });
  const slide = [
    {
      id: 1,
      content: <button>new😘😘</button>,
    },
    {
      id: 2,
      content: (
        <>
          <button>الاكثر قراءه</button>
          <div>
            <img
              style={{ width: "100px" }}
              src="./public/خلفية سيارة BMW رياضية من نوع vision بدقة 4K مناسبة للابتوب والكمبيوتر.jpg"
              alt=""
            />
          </div>
        </>
      ),
    },
    {
      id: 3,
      content: (
        <>
          <div>
            <p>مميز</p>
            <h1>click me</h1>
            <span>❤️</span>
          </div>
        </>
      ),
    },
  ];
  const slidebar = slide.map((slidee)=>{
    return(
      <Slidebar 
      key={slidee.id}
      >{slidee.content}
      </Slidebar>
      
    )
  })
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
        <div>{MyPots}</div>
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
          {slidebar}
        </div>
      </div>
    </>
  );
}

export default App;
