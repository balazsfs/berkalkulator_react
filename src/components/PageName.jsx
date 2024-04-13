import NameInput from "./NameInput"
import { useContext } from "react"
import { TotalSalaryContext } from "../contexts/TotalSalaryContext"

const PageName = ({currentIndex}) => {
    const [totalSalary, setTotalSalary] = useContext(TotalSalaryContext);

    const inputChange = (event) =>{
        const value = event.target.value;
        const updatedTotalSalary = totalSalary.map((item, index) => {
            if (index === currentIndex) {
                return { ...item, name: value };
            }
            return item;
        });
        setTotalSalary(updatedTotalSalary);
    }

    return (
        <div className="">
            <div>
                <h1 className="py-0 text-xl font-bold">{totalSalary[currentIndex].name.toUpperCase()} BÉRÉNEK KISZÁMÍTÁSA</h1>
            </div>
            <div>
                <NameInput title={'Családtag neve'} titleHelp={'Add meg a családtag nevét!'} inputChange={inputChange} totalSalary={totalSalary} currentIndex={currentIndex} />
            </div>
        </div>
    )
}

export default PageName