import NameInput from "./NameInput"
import { useState } from "react"

const PageName = () => {
    const [name,setName] = useState(''); 

    const inputChange = (event) =>{
        const value = event.target.value.toUpperCase();
        setName(value);
    }

    return (
        <div className="">
            <div>
                <h1 className="py-0 text-xl font-bold">{name} BÉRÉNEK KISZÁMÍTÁSA</h1>
            </div>
            <div>
                <NameInput title={'Családtag neve'} titleHelp={'Add meg a családtag nevét!'} inputChange={inputChange} />
            </div>
        </div>
    )
}

export default PageName