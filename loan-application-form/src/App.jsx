import { useState } from 'react'
import './App.css'
import LoanForm from './Loan'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LoanForm></LoanForm>
    </>
  )
}

export default App
