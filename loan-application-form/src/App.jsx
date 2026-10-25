import { useState } from "react";
import "./App.css";
import LoanForm from "./Loan";
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <LoanForm></LoanForm>
      </div>
    </>
  );
}

export default App;
