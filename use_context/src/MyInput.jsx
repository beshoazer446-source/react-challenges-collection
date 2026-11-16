import { useContext } from "react";
import { LoanInputContext } from "./contexts/LoanFormInputContext";
export default function Myinput() {
    const myContex = useContext(LoanInputContext);
  return (
    <>
      <div>
        <div></div>
        <label>{myContex.labelTitle}</label>
        <input
          value={myContex.value}
          onChange={(event) => {
            myContex.handleChange(event.target.value);
          }}
        />
      </div>
    </>
  );
}
