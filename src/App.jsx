import { useState } from "react"
import SingleSalaryCalculator from "./components/SingleSalaryCalculator"
import {TotalSalaryContext} from "./contexts/TotalSalaryContext"


function App() {
  const [totalSalary,setTotalSalary] = useState('');

  return (
    <>
      <TotalSalaryContext.Provider value={[totalSalary,setTotalSalary]}>
        <SingleSalaryCalculator/>
      </TotalSalaryContext.Provider>
    </>
  )
}

export default App
