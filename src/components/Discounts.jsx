import { useState } from "react";
import LabeledSwitch from "./LabeledSwitch"
import DateModal from "./DateModal";
import DiscountAfterChildren from "./DiscountAfterChildren";

const Discounts = (props) => {
  const {salary,discount,setDiscount,setPlusFromMarriage,setPlusFromChildren,showNewMarriage,setShowNewMarriage,showDiscountFromChildren,setShowDiscountFromChildren} = props;
  const [discountFromPersonal, setDiscountFromPersonal] = useState('');
  const [discountFromUnder, setDiscountFromUnder] = useState('');

  const handleUnderTwentyFiveSwitch = (event) =>{
    const checked = event.target.checked;
    const discountFromSalary = salary > 499952 ? 499952*0.15 : salary * 0.15;

    if(checked){
      setDiscountFromUnder(discountFromSalary);
      setDiscount(parseFloat(discountFromSalary) + parseFloat(discount))
    }else{
      setDiscount(discount-discountFromUnder);
    }
  }
  const handlePersonalDiscount = (event) =>{
    const checked = event.target.checked;

    const discountFromSalary = salary < 77300 ? salary*0.335 : 77300;

    if(checked){
      setDiscountFromPersonal(discountFromSalary);
      setDiscount(parseFloat(discountFromSalary) + parseFloat(discount))
    }else{
      setDiscount(discount-discountFromPersonal);
    }
  }
  const handleNewMarriage = (event) =>{
    const checked = event.target.checked;
    setShowNewMarriage(checked);
    setPlusFromMarriage(0);
  }
  const handleChildrenPlus = (event) =>{
    const checked = event.target.checked;
    setShowDiscountFromChildren(checked);
    setPlusFromChildren(0);
  }


  return (
    <div>
        <LabeledSwitch title={"25 év alattiak kedvezménye"} handler={handleUnderTwentyFiveSwitch} />
        <LabeledSwitch title={"Friss házasok kedvezménye"} handler={handleNewMarriage} /> {showNewMarriage && <DateModal setPlusFromMarriage={setPlusFromMarriage}/>} 
        <LabeledSwitch title={"Személyi adókedvezmény"} handler={handlePersonalDiscount}/> 
        <LabeledSwitch title={"Családi adókedvezmény"}handler={handleChildrenPlus} /> {showDiscountFromChildren && <DiscountAfterChildren setPlusFromChildren={setPlusFromChildren}/>}
    </div>
  )
}

export default Discounts