import "./Loan.css";
export default function Modal({ isVisible, errorMsg = null }) {
  if (isVisible) {
    return (
      <>
        <div id="modal">
          <div>
            {/* <h1 id="modal-content">the form has been successful</h1> */}
            <h1
              id="modal-content"
              style={{ color: errorMsg ? "red" : "green" }}
            >
              {errorMsg != null ? errorMsg : "the form has been successful"}
            </h1>
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
}
