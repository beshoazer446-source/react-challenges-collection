import { useState } from "react";
import Modal from "./Modal";
import "./Loan.css";
import Mycomponent from "./MyCompenent";
import { LoanInputContext } from "./contexts/LoanFormInputContext";
export default function LoanForm() {
  const [errorMsg, setErrorMsg] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    age: "",
    isEmployee: false,
    salary: "",
  });
  function handleFormSubmit(event) {
    event.preventDefault();
    setErrorMsg(null);
    const { age, phone } = form;
    if (age < 18 || age > 100) {
      setErrorMsg("the age is not allowed");
    } else if (phone.length < 10 || phone.length > 12) {
      setErrorMsg("the phone is not allowed");
    }
    setShowModal(true);
  }
  const btnIsDisabled =
    form.name == "" ||
    form.age == "" ||
    form.phone == "" ||
    form.isEmployee == "" ||
    form.salary == "";
  let btnClass = "";
  function handleDivClick() {
    if (showModal) {
      setShowModal(false);
    }
  }
  function handlePhoneNumberInputChange(value) {
    setForm({ ...form, phone: value });
  }
  function handleNameInputChange(value) {
    setForm({ ...form, name: value });
  }
  function handleAgeInputChange(value) {
    setForm({ ...form, age: value });
  }
  return (
    <div onClick={handleDivClick} className="page">
      <form className="card">
        <h1 style={{ textAlign: "center" }}>Requesting a Loan</h1>
        <hr />
        <LoanInputContext.Provider
          value={{
            value: form.name,
            handleChange: handleNameInputChange,
            labelTitle: "name",
          }}
        >
          <Mycomponent />
        </LoanInputContext.Provider>
        <LoanInputContext.Provider
          value={{
            value: form.phone,
            handleChange: handlePhoneNumberInputChange,
            labelTitle: "phone number",
          }}
        >
          <Mycomponent />
        </LoanInputContext.Provider>
        <LoanInputContext.Provider
          value={{
            value: form.age,
            handleChange: handleAgeInputChange,
            labelTitle: "age",
          }}
        >
          <Mycomponent />
        </LoanInputContext.Provider>
        <label>
          Are you an employee?
          <input
            type="checkbox"
            checked={form.isEmployee}
            onChange={(e) => setForm({ ...form, isEmployee: e.target.checked })}
          />
        </label>
        <label>
          Salary
          <select
            value={form.salary}
            onChange={(e) => setForm({ ...form, salary: e.target.value })}
          >
            <option value="">Select salary</option>
            <option value="low">Less than 5000</option>
            <option value="high">More than 5000</option>
          </select>
        </label>
        <button
          className={btnIsDisabled ? "disabled" : ""}
          onClick={handleFormSubmit}
          disabled={btnIsDisabled}
        >
          Submit
        </button>
      </form>
      <Modal errorMsg={errorMsg} isVisible={showModal} />
    </div>
  );
}
