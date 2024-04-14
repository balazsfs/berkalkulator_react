import { useContext } from "react"
import { TotalSalaryContext } from "../contexts/TotalSalaryContext"

const DiscountAfterChildren = ({currentIndex}) => {
    const [totalSalary,setTotalSalary] = useContext(TotalSalaryContext);

    const changeHandlerCurrent = (value) =>{
        const getter = totalSalary[currentIndex].numberOfChildren;
        if(getter==0 && value > 0 || getter>0){
            const updatedTotalSalary = totalSalary.map((item, index) => {
                if (index === currentIndex) {
                    return {
                        ...item, 
                        numberOfChildren : getter+value,
                        plusFromChildren : mathAfterChange(getter+value,totalSalary[currentIndex].numberOfDiscountedChildren)
                    };
                }
                return item;
            });
            setTotalSalary(updatedTotalSalary);
        }
    }

    const changeHandlerDiscounted = (value) =>{
        const getter = totalSalary[currentIndex].numberOfDiscountedChildren;
        const currentChildren = totalSalary[currentIndex].numberOfChildren;
        if(getter==0 && value > 0 && getter<currentChildren || getter==3 && value < 0 && getter<currentChildren || getter<3 && getter<currentChildren && getter>0 || getter==currentChildren && value < 0 && getter!=0 && getter>0){
            const updatedTotalSalary = totalSalary.map((item, index) => {
                if (index === currentIndex) {
                    return {
                        ...item, 
                        numberOfDiscountedChildren : getter+value,
                        plusFromChildren : mathAfterChange(currentChildren,getter+value)
                    };
                }
                return item;
            });
            setTotalSalary(updatedTotalSalary);
        }
    }

    const mathAfterChange = (current,discounted) =>{
        let totalDiscount = 0;
        if(discounted === 1){
            totalDiscount = current*11000;
        }else if(discounted === 2) {
            totalDiscount = current*22000;
        } else if(discounted === 3){
            totalDiscount = current*33000;
        }else{
            totalDiscount = 0;
        }
        return totalDiscount;
    }

    return (
        <div className="flex">
            <button className="bg-white rounded-xl px-2 m-1 border border-black" onClick={() =>changeHandlerCurrent(-1)}>-</button>
            <p className="text-sm font-medium py-2">{totalSalary[currentIndex].numberOfChildren}</p>
            <button className="bg-white rounded-xl px-2 m-1 border border-black" onClick={() =>changeHandlerCurrent(+1)}>+</button>
            <p className="text-sm font-medium py-2">Eltartott, ebből kedvezményezett: </p>
            <button className="bg-white rounded-xl px-2 m-1 border border-black" onClick={() =>changeHandlerDiscounted(-1)}>-</button>
            <p className="text-sm font-medium py-2">{totalSalary[currentIndex].numberOfDiscountedChildren}</p>
            <button className="bg-white rounded-xl px-2 m-1 border border-black" onClick={() =>changeHandlerDiscounted(+1)}>+</button>
        </div>
    )
}

export default DiscountAfterChildren