import { useState } from "react"
import SingleSalaryCalculator from "./components/SingleSalaryCalculator"
import {TotalSalaryContext} from "./contexts/TotalSalaryContext"


function App() {
  const [totalSalary,setTotalSalary] = useState([{
    'name' : '',
    'salary' : 0,
    'discount' : 0,
    'plusFromMarriage' : 0,
    'plusFromChildren' : 0,
    'showNewMarriage' : false,
    'showDiscountFromChildren' : false
  }]);

  return (
    <>
      <TotalSalaryContext.Provider value={[totalSalary,setTotalSalary]}>
        <SingleSalaryCalculator/>
      </TotalSalaryContext.Provider>
    </>
  )
}

export default App
