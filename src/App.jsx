import { useState } from "react"
import SingleSalaryCalculator from "./components/SingleSalaryCalculator"
import {TotalSalaryContext} from "./contexts/TotalSalaryContext"


function App() {
  const [totalSalary,setTotalSalary] = useState([{
    'name' : '',
    'salary' : 0,
    'discount' : 0,
    'rangeInput':50,
    'savedInput' : 0,
    'plusFromMarriage' : 0,
    'plusFromChildren' : 0,
    'underDiscountSwitch' : false,
    'showNewMarriage' : false,
    'personalDiscountSwitch' : false,
    'showDiscountFromChildren' : false,
    'eligibleForNewMarriage' : false,
    'eligibleForNewMarriageHidden' : true,
    'numberOfChildren' : 0,
    'numberOfDiscountedChildren' : 0
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
