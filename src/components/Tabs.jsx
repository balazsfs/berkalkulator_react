import Tab from "./Tab"

const Tabs = ({setCurrentIndex,createNewTab,totalSalary}) => {

    const plusHandler = () =>{
        createNewTab();
        setCurrentIndex(totalSalary.length);
    }

    const tabHandler = (event) =>{
        const index = parseInt(event.target.id);
        setCurrentIndex(index);
    }

    return (
        <div className="flex px-5 py-1">
            {
                totalSalary.map((elem,index) => <Tab key={index} index={index} title={elem.name} onClick={tabHandler}/>)
            }
            <Tab title={'+'} onClick={plusHandler}/>
        </div>
    )
}

export default Tabs