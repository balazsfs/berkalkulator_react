import { useState,useContext } from "react"
import { TotalSalaryContext } from "../contexts/TotalSalaryContext"

const DiscountAfterChildren = ({currentIndex}) => {
    const [currentChildren,setCurrentChildren] = useState(0);
    const [discountedChildren,setdiscountedChildren] = useState(0);
    const [totalSalary,setTotalSalary] = useContext(TotalSalaryContext);

    const changeHandlerCurrent = (getter,setter,value) =>{
        if(getter==0 && value > 0 || getter>0){
            setter(getter+value);
            mathAfterChange(currentChildren+value,discountedChildren);
        }
    }

    const changeHandlerDiscounted = (getter,setter,value) =>{
        if(getter==0 && value > 0 && getter<currentChildren || getter==3 && value < 0 && getter<currentChildren || getter<3 && getter<currentChildren && getter>0 || getter==currentChildren && value < 0 && getter!=0 && getter>0){
            setter(getter+value);
            mathAfterChange(currentChildren,discountedChildren+value);
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

        const updatedTotalSalary = totalSalary.map((item, index) => {
            if (index === currentIndex) {
                return {
                    ...item, 
                    plusFromChildren : totalDiscount
                };
            }
            return item;
        });
        setTotalSalary(updatedTotalSalary);
    }

    return (
        <div className="flex">
            <button className="bg-white rounded-xl px-2 m-1 border border-black" onClick={() =>changeHandlerCurrent(currentChildren,setCurrentChildren,-1)}>-</button>
            <p className="text-sm font-medium py-2">{currentChildren}</p>
            <button className="bg-white rounded-xl px-2 m-1 border border-black" onClick={() =>changeHandlerCurrent(currentChildren,setCurrentChildren,+1)}>+</button>
            <p className="text-sm font-medium py-2">Eltartott, ebből kedvezményezett: </p>
            <button className="bg-white rounded-xl px-2 m-1 border border-black" onClick={() =>changeHandlerDiscounted(discountedChildren,setdiscountedChildren,-1)}>-</button>
            <p className="text-sm font-medium py-2">{discountedChildren}</p>
            <button className="bg-white rounded-xl px-2 m-1 border border-black" onClick={() =>changeHandlerDiscounted(discountedChildren,setdiscountedChildren,+1)}>+</button>
        </div>
    )
}

export default DiscountAfterChildren