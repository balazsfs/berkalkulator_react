import NameInput from "./NameInput"
import { useContext } from "react"
import { TotalSalaryContext } from "../contexts/TotalSalaryContext"

const PageName = ({currentIndex,setCurrentIndex,createNewTab}) => {
    const [totalSalary, setTotalSalary] = useContext(TotalSalaryContext);

    const inputChange = (event) =>{
        const value = event.target.value;
        if(value.length<20){
            const updatedTotalSalary = totalSalary.map((item, index) => {
                if (index === currentIndex) {
                    return { ...item, name: value };
                }
                return item;
            });
            setTotalSalary(updatedTotalSalary);
        }
        
    }

    const pageDeleteHandler= () =>{
        if(currentIndex!=0){
            setCurrentIndex(0);
            const updatedTotalSalary = totalSalary.filter((item, index) => index !== currentIndex);
    
            setTotalSalary(updatedTotalSalary);
        }else if(currentIndex==0 && totalSalary.length >=2 ){
            setCurrentIndex(0);
            const updatedTotalSalary = totalSalary.filter((item, index) => index !== currentIndex);

            setTotalSalary(updatedTotalSalary);
        }else{
            setCurrentIndex(0);
            const updatedTotalSalary = [{
                'name' : '',
                'salary' : 0,
                'discount' : 0,
                'rangeInput':50,
                'savedInput' : 0,
                'plusFromMarriage' : 0,
                'plusFromChildren' : 0,
                'underDiscountSwitch' : false,
                'showNewMarriage' : false,
                'personalDiscountSwitch' : false,
                'showDiscountFromChildren' : false,
                'eligibleForNewMarriage' : false,
                'eligibleForNewMarriageHidden' : true,
                'numberOfChildren' : 0,
                'numberOfDiscountedChildren' : 0
            }];

            setTotalSalary(updatedTotalSalary);
        }
    }

    return (
        <div className="">
            <div className="flex justify-between">
                <h1 className="py-0 text-xl font-bold">{totalSalary[currentIndex].name.toUpperCase()} BÉRÉNEK KISZÁMÍTÁSA</h1>
                <div className="">
                    <button className="bg-slate-300 rounded-xl border px-4 py-2 text-sm font-bold" onClick={pageDeleteHandler}>X</button>
                </div>
            </div>
            <div>
                <NameInput title={'Családtag neve'} titleHelp={'Add meg a családtag nevét!'} inputChange={inputChange} totalSalary={totalSalary} currentIndex={currentIndex} />
            </div>
        </div>
    )
}

export default PageName