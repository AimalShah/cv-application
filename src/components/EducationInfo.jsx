
const EducationInfo = ({data , handleData}) => {
    return(
        <div className="flex flex-col">
            <h2 className="text-2xl my-8">
                Education
            </h2>
            <input 
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm my-2"
             type="text"
             placeholder="School"
             value={data.info[4].text}
             onChange={handleData}   
            />
            <input 
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm my-2"
             type="text"
             placeholder="Degree"
             value={data.info[5].text}
             onChange={handleData} 
            />
        </div>
    )
}

export default EducationInfo;