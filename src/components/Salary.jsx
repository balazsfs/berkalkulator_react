import { useState } from "react"
import SalaryInput from "./SalaryInput"

const Salary = (props) => {
    const {setSalary,resetSwitches} = props;
    const [inputValue, setInputValue] = useState('');
    const [inputSavedValue, setInputSavedValue] = useState('');
    const [rangeInputValue, setRangeInputValue] = useState('');
 
    const handleInputChange = (event) => {
        const value = event.target.value;
        const filteredValue = value.replace(/\D/g, '');
        setInputValue(filteredValue);
        setSalary(filteredValue);
        setInputSavedValue(inputValue);
        setRangeInputValue(50);
        resetSwitches();
    }

    const handleRangeInputChange = (event)=>{
        const value = event.target.value;
        setInputValue(Math.round(inputSavedValue*value/10*2));
        setSalary(Math.round(inputSavedValue*value/10*2));
        setRangeInputValue(value);
        resetSwitches();
    }

    const handleButtonClick = (event) =>{
        const value = event.target.textContent;
        const filteredValue = value.replace(/%/g, '');
        setInputValue(Math.round(inputValue-(filteredValue/100*inputValue)*-1));
        setInputSavedValue(Math.round(inputValue-(filteredValue/100*inputValue)*-1));
        setSalary(Math.round(inputValue-(filteredValue/100*inputValue)*-1));
        setRangeInputValue(50);
        resetSwitches();
    }

    return (
        <div>
            <SalaryInput title={'Bruttó bér'} titleHelp={'Add meg a bruttó béredet!'} value={inputValue} onChange={handleInputChange} />
            <input className="w-64 rounded-xl cursor-pointer" id="basic-range-slider-usage" type="range" min="0" max="100" onChange={handleRangeInputChange} value={rangeInputValue}/>
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