import PageName from "./PageName"
import Salary from "./Salary"
import Discounts from "./Discounts"
import { useState } from "react"
import SalaryOut from "./SalaryOut"

const SingleSalaryCalculator = () => {
  const [salary,setSalary] = useState(0);
  const [discount,setDiscount] = useState(0);
  const [plusFromMarriage, setPlusFromMarriage] = useState(0);
  const [plusFromChildren, setPlusFromChildren] = useState(0);
  const [showNewMarriage, setShowNewMarriage] = useState('');
  const [showDiscountFromChildren, setShowDiscountFromChildren] = useState('');

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
        <div className="grid grid-cols-2 gap-5 p-5">
        <div className="container bg-slate-200 rounded-xl p-5">
            <PageName />
            <Salary setSalary={setSalary} resetSwitches={resetSwitches} />
            <Discounts setSalary={setSalary} salary={salary} setDiscount={setDiscount} discount={discount} setPlusFromMarriage={setPlusFromMarriage} setPlusFromChildren={setPlusFromChildren} showNewMarriage={showNewMarriage} setShowNewMarriage={setShowNewMarriage} showDiscountFromChildren={showDiscountFromChildren} setShowDiscountFromChildren={setShowDiscountFromChildren}/>
            <SalaryOut salary={salary} discount={discount} plusFromChildren={plusFromChildren} plusFromMarriage={plusFromMarriage}/>
        </div>
        <div className="container bg-slate-200 rounded-xl">

        </div>
        </div>
    </div>
  )
}

export default SingleSalaryCalculator