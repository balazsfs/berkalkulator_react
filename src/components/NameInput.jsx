const NameInput = (props) => {
    const {title,titleHelp,inputChange} = props;
    return (
        <div className="">
            <div className="m-0 py-1 text-slate-900 font-medium text-sm">
                {title}
            </div>
            <div className="m-0 p-0">
                <input type="text" className="border rounded mx-1 text-slate-400 text py-1 px-2 w-64" onChange={inputChange} />
            </div>
            <div className="m-0 py-1 text-slate-500 text-sm">
                {titleHelp}
            </div>
        </div>
    )
}

export default NameInput