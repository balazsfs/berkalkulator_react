import { useState } from "react";
import LabeledSwitch from "./LabeledSwitch"
import DateModal from "./DateModal";
import DiscountAfterChildren from "./DiscountAfterChildren";
import { TotalSalaryContext } from "../contexts/TotalSalaryContext"
import { useContext } from 'react';


const Discounts = ({currentIndex}) => {
  const [discountFromPersonal, setDiscountFromPersonal] = useState('');
  const [discountFromUnder, setDiscountFromUnder] = useState('');

  const [totalSalary,setTotalSalary] = useContext(TotalSalaryContext);

  const handleUnderTwentyFiveSwitch = (event) =>{
    const checked = event.target.checked;
    const discountFromSalary = totalSalary[currentIndex].salary > 499952 ? 499952*0.15 : totalSalary[currentIndex].salary * 0.15;

    if(checked){
      setDiscountFromUnder(discountFromSalary);
      const updatedTotalSalary = totalSalary.map((item, index) => {
        if (index === currentIndex) {
            return {
                ...item, 
                discount: parseFloat(discountFromSalary) + parseFloat(totalSalary[currentIndex].discount) , underDiscountSwitch : true
            };
        }
        return item;
      });
      setTotalSalary(updatedTotalSalary);
    }else{
      const updatedTotalSalary = totalSalary.map((item, index) => {
        if (index === currentIndex) {
            return {
                ...item, 
                discount: totalSalary[currentIndex].discount - discountFromUnder , underDiscountSwitch : false
            };
        }
        return item;
      });
      setTotalSalary(updatedTotalSalary);
    }
  }
  const handlePersonalDiscount = (event) =>{
    const checked = event.target.checked;

    const discountFromSalary = totalSalary[currentIndex].salary < 77300 ? totalSalary[currentIndex].salary*0.335 : 77300;

    if(checked){
      setDiscountFromPersonal(discountFromSalary);
      const updatedTotalSalary = totalSalary.map((item, index) => {
        if (index === currentIndex) {
            return {
                ...item, 
                discount: parseFloat(discountFromSalary) + parseFloat(totalSalary[currentIndex].discount) ,personalDiscountSwitch : true
            };
        }
        return item;
      });
      setTotalSalary(updatedTotalSalary);
    }else{
      const updatedTotalSalary = totalSalary.map((item, index) => {
        if (index === currentIndex) {
            return {
                ...item, 
                discount: totalSalary[currentIndex].discount - discountFromPersonal, personalDiscountSwitch : false
            };
        }
        return item;
      });
      setTotalSalary(updatedTotalSalary);
    }
  }
  const handleNewMarriage = (event) =>{
    const checked = event.target.checked;
    const updatedTotalSalary = totalSalary.map((item, index) => {
      if (index === currentIndex) {
          return {
              ...item, 
              showNewMarriage : checked, plusFromMarriage : 0,
              eligibleForNewMarriageHidden : checked
          };
      }
      return item;
    });
    setTotalSalary(updatedTotalSalary);
  }
  const handleChildrenPlus = (event) =>{
    const checked = event.target.checked;
    const updatedTotalSalary = totalSalary.map((item, index) => {
      if (index === currentIndex) {
          return {
              ...item, 
              showDiscountFromChildren : checked, plusFromChildren : 0,
              numberOfChildren : 0,
              numberOfDiscountedChildren : 0
          };
      }
      return item;
    });
    setTotalSalary(updatedTotalSalary);
  }


  return (
    <div>
        <LabeledSwitch checked={totalSalary[currentIndex].underDiscountSwitch} title={"25 év alattiak kedvezménye"} handler={handleUnderTwentyFiveSwitch} />
        <LabeledSwitch checked={totalSalary[currentIndex].showNewMarriage} title={"Friss házasok kedvezménye"} handler={handleNewMarriage} /> {totalSalary[currentIndex].showNewMarriage && <DateModal currentIndex={currentIndex}/>} 
        <LabeledSwitch checked={totalSalary[currentIndex].personalDiscountSwitch} title={"Személyi adókedvezmény"} handler={handlePersonalDiscount}/> 
        <LabeledSwitch checked={totalSalary[currentIndex].showDiscountFromChildren} title={"Családi adókedvezmény"}handler={handleChildrenPlus} /> {totalSalary[currentIndex].showDiscountFromChildren && <DiscountAfterChildren  currentIndex={currentIndex}/>}
    </div>
  )
}

export default Discounts