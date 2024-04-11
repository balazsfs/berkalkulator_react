import { useState } from "react";

const LabeledSwitch = (props) => {
    const {title,handler} = props;
    
    return (
        <div class="labeledSwitch">
            <label className="inline-flex items-center cursor-pointer">
            <input id="switch" type="checkbox" className="sr-only peer" onChange={handler}/>
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
            <span className="ms-3 text-sm font-medium">{title}</span>
            </label>
        </div>
    )
}

export default LabeledSwitch