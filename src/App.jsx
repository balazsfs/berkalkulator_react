import LabeledInput from "./components/LabeledInput"


function App() {
  return (
    <>
    <div className="grid grid-cols-2 gap-5 p-5">
      <div className="container bg-slate-200 rounded-xl">
        <LabeledInput title={'Családtag neve'} titleHelp={'Add meg a családtag nevét!'} />
        <LabeledInput title={'Bruttó bér'} titleHelp={'Add meg a bruttó béredet!'} />
      </div>
      <div className="container bg-slate-200 rounded-xl">

      </div>
    </div>
    </>
  )
}

export default App
