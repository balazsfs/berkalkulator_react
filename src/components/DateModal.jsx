import { useState } from "react"

const DateModal = () => {
    const [showModal, setShowModal] = useState(false);
    const [eligible,setEligible] = useState('');

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

            if(diffInYear <= 2.0){
                setEligible(true);
            }else{
                setEligible(false);
                document.getElementById('notEligible').classList.remove('hidden');
            }
        } else {
            errorDiv.classList.remove('hidden');
        }
    }

    return (
      <>
        <button
          className="bg-slate-500 text-white font-bold text-sm px-2 py-1 rounded-xl mb-1"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Dátum hozzáadása
        </button>
        {eligible ? <div className="bg-green-600 rounded-xl text-white mb-1 w-32 font-bold text-center">Jogosult</div> : <div id="notEligible" className="bg-red-600 rounded-xl text-white mb-1 w-32 font-bold text-center hidden">Nem jogosult</div>}
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
      </>
    );
}

export default DateModal