const SalaryOut = ({salary,discount,plusFromChildren,plusFromMarriage}) => {
  return (
    <div className="text-center">
        <div className="text-xl font-bold text-slate-600 p-2">
            Számított nettó bér: 
        </div>
        <p className="bg-slate-700 text-xl w-32 m-auto text-white p-3 rounded">
            {discount > salary*0.335 ? Math.round(salary)+plusFromMarriage+plusFromChildren : Math.round(salary-(salary*0.335)+discount)+plusFromMarriage+plusFromChildren } Ft
        </p>
    </div>
  )
}

export default SalaryOut