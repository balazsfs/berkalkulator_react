const Tab = ({title,onClick,index}) => {
  return (
    <div id={index} className="bg-slate-200 rounded-lg px-2 py-1 mx-1 text-sm font-bold text-center cursor-pointer" onClick={onClick}>
        {title}
    </div>
  )
}

export default Tab