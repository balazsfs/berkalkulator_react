import SalaryInput from "./SalaryInput"
import { TotalSalaryContext } from "../contexts/TotalSalaryContext"
import { useContext } from 'react';

const Salary = ({currentIndex}) => {
    const [totalSalary, setTotalSalary] = useContext(TotalSalaryContext);
 
    const handleInputChange = (event) => {
        const value = event.target.value;
        const filteredValue = value.replace(/\D/g, '');
        const updatedTotalSalary = totalSalary.map((item, index) => {
            if (index === currentIndex) {
                return {
                    ...item, 
                    salary: filteredValue,
                    rangeInput :50,
                    savedInput: filteredValue,
                    discount : 0,
                    plusFromMarriage : 0,
                    plusFromChildren : 0,
                    showNewMarriage : false,
                    showDiscountFromChildren : false,
                    personalDiscountSwitch : false,
                    underDiscountSwitch : false
                };
            }
            return item;
        });
        setTotalSalary(updatedTotalSalary);
    }

    const handleRangeInputChange = (event)=>{
        const value = event.target.value;
        const updatedTotalSalary = totalSalary.map((item, index) => {
            if (index === currentIndex) {
                return { ...item, salary: Math.round(totalSalary[currentIndex].savedInput*value/100*2),
                    rangeInput: value,
                    discount : 0,
                    plusFromMarriage : 0,
                    plusFromChildren : 0,
                    showNewMarriage : false,
                    showDiscountFromChildren : false,
                    personalDiscountSwitch : false,
                    underDiscountSwitch : false 
                };
            }
            return item;
        });
        setTotalSalary(updatedTotalSalary);
    }

    const handleButtonClick = (event) =>{
        const value = event.target.textContent;
        const filteredValue = value.replace(/%/g, '');
        
        const updatedTotalSalary = totalSalary.map((item, index) => {
            if (index === currentIndex) {
                return { ...item, salary: Math.round(totalSalary[currentIndex].salary-(filteredValue/100*totalSalary[currentIndex].salary)*-1),
                    savedInput : Math.round(totalSalary[currentIndex].salary-(filteredValue/100*totalSalary[currentIndex].salary)*-1), 
                    rangeInput :50,
                    discount : 0,
                    plusFromMarriage : 0,
                    plusFromChildren : 0,
                    showNewMarriage : false,
                    showDiscountFromChildren : false,
                    personalDiscountSwitch : false,
                    underDiscountSwitch : false
                };
            }
            return item;
        });
        setTotalSalary(updatedTotalSalary);
    }

    return (
        <div>
            <SalaryInput title={'Bruttó bér'} titleHelp={'Add meg a bruttó béredet!'} value={totalSalary[currentIndex].salary} onChange={handleInputChange} />
            <input className="w-64 rounded-xl cursor-pointer" id="basic-range-slider-usage" type="range" min="0" max="100" onChange={handleRangeInputChange} value={totalSalary[currentIndex].rangeInput}/>
            <div className="">
                <button className="p-2 m-2 bg-slate-500 rounded-md text-white" onClick={handleButtonClick}>-1%</button>
                <button className="p-2 m-2 bg-slate-500 rounded-md text-white" onClick={handleButtonClick}>-5%</button>
                <button className="p-2 m-2 bg-slate-500 rounded-md text-white" onClick={handleButtonClick}>+1%</button>
                <button className="p-2 m-2 bg-slate-500 rounded-md text-white" onClick={handleButtonClick}>+5%</button>
            </div>
        </div>
    )
}

export default Salary