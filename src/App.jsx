import { useState } from "react"
import SingleSalaryCalculator from "./components/SingleSalaryCalculator"
import {TotalSalaryContext} from "./contexts/TotalSalaryContext"
import Tabs from "./components/Tabs"
import SalaryList from "./components/SalaryList";


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
  const [currentIndex, setCurrentIndex] = useState(0);

  const createNewTab = () =>{
    const basicData = {
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
    }
    setTotalSalary(prevTotalSalary => [...prevTotalSalary, basicData]);
  }

  return (
    <>
      <TotalSalaryContext.Provider value={[totalSalary,setTotalSalary]}>
        <div className="grid content-center">
          <div className="w-full">
          <Tabs createNewTab={createNewTab} setCurrentIndex={setCurrentIndex} currentIndex={currentIndex} totalSalary={totalSalary}/>
            <div className="grid xl:grid-cols-2 lg:grid-cols-1 gap-5 px-5 w-2/4">
              <SingleSalaryCalculator currentIndex={currentIndex}/>
              <SalaryList/>
            </div>
            </div>
          </div>
      </TotalSalaryContext.Provider>
    </>
  )
}

export default App
