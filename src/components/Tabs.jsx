import Tab from "./Tab"

const Tabs = ({setCurrentIndex,createNewTab}) => {

    const plusHandler = () =>{
        createNewTab();
    }

    const tabHandler = (event) =>{
        const index = event.target.id;
        setCurrentIndex(index);
    }

    return (
        <div className="flex px-5 py-1">
            <Tab index={0} title={"Balázs"} onClick={tabHandler}/>
            <Tab index={1} title={"Balázs"} onClick={tabHandler}/>
            <Tab index={2} title={"Balázs"} onClick={tabHandler}/>
            <Tab title={'+'} onClick={plusHandler}/>
        </div>
    )
}

export default Tabs