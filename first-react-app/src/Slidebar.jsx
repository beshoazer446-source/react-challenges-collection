import TagButton from "./TagButton";
export default function Slidebar() {
  return (
    <div
      style={{
        border: "2px solid #008080",
        padding: "15px",
        borderRadius: "5px",
        backgroundColor: "#ffffff",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignContent: "flex-start",
        height: "fit-content",
        
      }}
    >
      <TagButton />
      <TagButton />
      <TagButton />
      <TagButton />
      <TagButton />
      <TagButton />
      <TagButton />
      <TagButton />
    </div>
  );
}
