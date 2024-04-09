import Discounts from "./components/Discounts"
import PageName from "./components/PageName"
import Salary from "./components/Salary"
import { useState } from "react"


function App() {
  

  return (
    <>
    <div className="grid grid-cols-2 gap-5 p-5">
      <div className="container bg-slate-200 rounded-xl p-5">
        <PageName />
        <Salary />
        <Discounts />
        <div>
          <div>
            Számított nettó bér:
          </div>
          <div>

          </div>
        </div>
      </div>
      <div className="container bg-slate-200 rounded-xl">

      </div>
    </div>
    </>
  )
}

export default App
