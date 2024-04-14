import { useState,useContext } from "react"
import { TotalSalaryContext } from "../contexts/TotalSalaryContext"

const DateModal = ({currentIndex}) => {
    const [showModal, setShowModal] = useState(false);
    const [totalSalary,setTotalSalary] = useContext(TotalSalaryContext);

    const handleDateInputCheck = () => {
        const value = document.getElementById('dateInput').value;
        const regex = /^(19|20)\d{2}\/(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])$/;;
        const errorDiv = document.getElementById('dateError');
        
        if(regex.test(value)) {
            setShowModal(false);
            errorDiv.classList.add('hidden');
            const date = new Date();
            const [year,month,day] = value.split('/');
            const yearDiff = date.getFullYear() - year;
            const monthDiff = date.getMonth()+1 - month;
            const dayDiff = date.toDateString().split(' ')[2] - day;
            const diffInYear = yearDiff + monthDiff/12 + dayDiff/365;

            if(diffInYear <= 2.0 && diffInYear >= 0){
              const updatedTotalSalary = totalSalary.map((item, index) => {
                if (index === currentIndex) {
                    return {
                      ...item, 
                    plusFromMarriage : 5000,
                    eligibleForNewMarriage : true,
                    eligibleForNewMarriageHidden : false
                  };
                }
                return item;
              });
              setTotalSalary(updatedTotalSalary);
            }else{
                const updatedTotalSalary = totalSalary.map((item, index) => {
                  if (index === currentIndex) {
                      return {
                          ...item, 
                          plusFromMarriage : 0,
                          eligibleForNewMarriage : false,
                          eligibleForNewMarriageHidden : false
                      };
                  }
                  return item;
                });
                setTotalSalary(updatedTotalSalary);
            }
        } else {
            errorDiv.classList.remove('hidden');
        }
    }

    return (
      <div className="flex">
        <button
          className="bg-slate-500 text-white font-bold text-sm px-2 py-1 rounded-xl mb-1"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Dátum hozzáadása
        </button>
        {totalSalary[currentIndex].eligibleForNewMarriage ?<div className="bg-green-500 ml-1 text-sm p-1 rounded-xl text-white mb-1 w-32 font-bold text-center">Jogosult</div> : <div className={`bg-red-600 rounded-xl text-white text-sm p-1 ml-1 mb-1 w-32 font-bold text-center ${totalSalary[currentIndex].eligibleForNewMarriageHidden ? "hidden" : ""}`}>Nem jogosult</div>}
        {showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="relative p-6 flex-auto">
                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                      A kedvezmény először a házasságközést követő hónapra vehető igénybe és a házassági életközösség alatt legfeljebb 24 hónapon keresztül jár.
                    </p>
                    <div className="m-0 py-1 text-slate-900 font-medium text-sm">
                        Add meg a házasságkötés dátumát:
                    </div>
                    <input id="dateInput" type="text" placeholder="YYYY/MM/DD" className="border rounded p-2 w-64" />
                    <div className="m-0 py-1 text-slate-500 text-sm">
                        Például: 2000/10/25
                    </div>
                    <div id='dateError' className="text-red-500 hidden">
                        A dátum formátuma nem megfelelő!
                    </div>
                  </div>
                  <div className="flex items-center p-6 rounded-b">
                    <button
                      className="text-white bg-slate-700 rounded background-transparent font-bold px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={handleDateInputCheck}
                    >
                      Mentés
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
    );
}

export default DateModal