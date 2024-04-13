import Tab from "./Tab"
import { TotalSalaryContext } from "../contexts/TotalSalaryContext"
import { useContext } from 'react';

const Tabs = ({setCurrentIndex,createNewTab}) => {
    const [totalSalary, setTotalSalary] = useContext(TotalSalaryContext);

    const plusHandler = () =>{
        createNewTab();
        setCurrentIndex(totalSalary.length);
    }

    const tabHandler = (event) =>{
        const index = parseInt(event.target.id);
        setCurrentIndex(index);
    }

    return (
        <div className="flex px-5 py-1">
            {
                totalSalary.map((elem,index) => <Tab key={index} index={index} title={elem.name} onClick={tabHandler}/>)
            }
            <Tab title={'+'} onClick={plusHandler}/>
        </div>
    )
}

export default Tabs