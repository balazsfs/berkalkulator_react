import PageName from "./PageName"
import Salary from "./Salary"
import Discounts from "./Discounts"
import LabeledSwitch from "./LabeledSwitch"
import { useState } from "react"

const SingleSalaryCalculator = () => {
  const [salary,setSalary] = useState(0);
  const [discount,setDiscount] = useState(0);


  return (
    <div>
        <div className="grid grid-cols-2 gap-5 p-5">
        <div className="container bg-slate-200 rounded-xl p-5">
            <PageName />
            <Salary setSalary={setSalary} />
            <Discounts setSalary={setSalary} salary={salary} setDiscount={setDiscount} discount={discount}/>
            <div>
            <div>
                Számított nettó bér: {discount > salary*0.335 ? Math.round(salary) : Math.round(salary-(salary*0.335)+discount) }
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