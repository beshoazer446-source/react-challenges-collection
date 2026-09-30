export default function Post({
  number = 0,
  content = "no content",
  pra = "empty",
  chidren,
}) {
  return (
    <div
      style={{
        border: "5px solid #0d7a72",
        borderRadius: "8px",
        padding: "25px",
        margin: "20px auto",
        width: "600px",
        background: "#ffffff",
        fontFamily: "Arial, sans-serif",
        boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
        textAlign: "center",
      }}
    >
      <h1>{number}</h1>
      <h3>{content}</h3>
      <hr />
      <p>{pra}</p>
      {chidren}
    </div>
  );
}
