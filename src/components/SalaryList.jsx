import { useContext } from "react"
import { TotalSalaryContext } from "../contexts/TotalSalaryContext"

const SalaryList = () => {
    const [totalSalary,setTotalSalary] = useContext(TotalSalaryContext);

    const sum = totalSalary.reduce((accumulator, elem) => {
        return elem.discount > elem.salary * 0.335
            ? accumulator + Math.round(elem.salary) + elem.plusFromMarriage + elem.plusFromChildren
            : accumulator + Math.round(elem.salary - (elem.salary * 0.335) + elem.discount) + elem.plusFromMarriage + elem.plusFromChildren;
    }, 0);


    return (
        <div className="container bg-slate-200 rounded-xl">
            <div className="text-center pt-10 pb-5 font-bold text-xl">
                Háztartás összesített jövedelme
            </div>
            <div className="px-10">
            <table className="w-full bg-white">
                <thead className="">
                    <tr>
                        <th className="text-left p-1 border font-bold text-sm">Családtag</th>
                        <th className="text-left p-1 border font-bold text-sm">Nettó bér</th>
                    </tr>
                </thead>
                <tbody className="">
                {
                    totalSalary.map((elem, index) => (
                            <tr key={`row-${index}`}>
                                <td className="text-left border">{elem.name}</td>
                                <td className="text-left border">{elem.discount > elem.salary*0.335 ? Math.round(elem.salary)+elem.plusFromMarriage+elem.plusFromChildren : Math.round(elem.salary-(elem.salary*0.335)+elem.discount)+elem.plusFromMarriage+elem.plusFromChildren } Ft</td>
                            </tr>
                        ))
                    }
                    <tr className="">
                        <td className="text-left border">Összesen:</td>
                        <td className="text-left border">{sum} Ft</td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    )
}

export default SalaryList