import PageName from "./PageName"
import Salary from "./Salary"
import Discounts from "./Discounts"
import SalaryOut from "./SalaryOut"


const SingleSalaryCalculator = ({currentIndex,setCurrentIndex,createNewTab}) => {
  return (
    <div className="container bg-slate-200 rounded-xl p-5">
      <PageName currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} createNewTab={createNewTab}/>
      <Salary currentIndex={currentIndex} />
      <Discounts currentIndex={currentIndex}/>
      <SalaryOut currentIndex={currentIndex}/>
    </div>
  )
}

export default SingleSalaryCalculator