import PageName from "./PageName"
import Salary from "./Salary"
import Discounts from "./Discounts"
import LabeledSwitch from "./LabeledSwitch"
import { useState } from "react"

const SingleSalaryCalculator = () => {
  const [salary,setSalary] = useState(0);
  const [plusFromMarriage, setPlusFromMarriage] = useState(0);
  const [discount,setDiscount] = useState(0);

  const resetSwitches = ()=>{
    const switches = document.querySelectorAll('#switch');

    switches.forEach((element) => {
      element.checked = false;
    });
    setDiscount(0);
    setPlusFromMarriage(0);
  }

  return (
    <div>
        <div className="grid grid-cols-2 gap-5 p-5">
        <div className="container bg-slate-200 rounded-xl p-5">
            <PageName />
            <Salary setSalary={setSalary} resetSwitches={resetSwitches} />
            <Discounts setSalary={setSalary} salary={salary} setDiscount={setDiscount} discount={discount} setPlusFromMarriage={setPlusFromMarriage}/>
            <div>
            <div>
                Számított nettó bér: {discount > salary*0.335 ? Math.round(salary)+plusFromMarriage : Math.round(salary-(salary*0.335)+discount)+plusFromMarriage }
            </div>
            </div>
        </div>
        <div className="container bg-slate-200 rounded-xl">

        </div>
        </div>
    </div>
  )
}

export default SingleSalaryCalculator