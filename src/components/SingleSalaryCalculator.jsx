import PageName from "./PageName"
import Salary from "./Salary"
import Discounts from "./Discounts"
import { useContext, useState } from "react"
import SalaryOut from "./SalaryOut"
import Tabs from "./Tabs"
import { TotalSalaryContext } from "../contexts/TotalSalaryContext"

const SingleSalaryCalculator = () => {
  const [salary,setSalary] = useState(0);
  const [discount,setDiscount] = useState(0);
  const [plusFromMarriage, setPlusFromMarriage] = useState(0);
  const [plusFromChildren, setPlusFromChildren] = useState(0);
  const [showNewMarriage, setShowNewMarriage] = useState('');
  const [showDiscountFromChildren, setShowDiscountFromChildren] = useState('');
  const [currentIndex,setCurrentIndex] = useState(0);

  const [totalSalary,setTotalSalary] = useContext(TotalSalaryContext);

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
      'showDiscountFromChildren' : false
    }
    setTotalSalary(prevTotalSalary => [...prevTotalSalary, basicData]);
  }

  const resetSwitches = ()=>{
    const switches = document.querySelectorAll('#switch');

    switches.forEach((element) => {
      element.checked = false;
    });
    setDiscount(0);
    setPlusFromMarriage(0);
    setPlusFromChildren(0);
    setShowNewMarriage(false);
    setShowDiscountFromChildren(false);
  }

  return (
    <div>
        <Tabs createNewTab={createNewTab} setCurrentIndex={setCurrentIndex} currentIndex={currentIndex} totalSalary={totalSalary}/>
        <div className="grid grid-cols-2 gap-5 px-5">
          <div className="container bg-slate-200 rounded-xl p-5">
              <PageName currentIndex={currentIndex} />
              <Salary resetSwitches={resetSwitches} currentIndex={currentIndex} />
              <Discounts currentIndex={currentIndex}/>
              <SalaryOut salary={salary} discount={discount} plusFromChildren={plusFromChildren} plusFromMarriage={plusFromMarriage} currentIndex={currentIndex}/>
          </div>
        <div className="container bg-slate-200 rounded-xl">

        </div>
        </div>
    </div>
  )
}

export default SingleSalaryCalculator