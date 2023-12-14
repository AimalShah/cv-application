

const PersonalInfo = ({data , handleData , pictureUpload}) => {
    return(
        <div className="flex flex-col">
            <h2 className="text-2xl my-8 ">
                PersonalInfo
            </h2>
            <div className="flex gap-2">
                <input 
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-1/2 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                type="text"
                placeholder="First Name"
                value={data.info[0].text}
                onChange={handleData}
                />
                <input 
                 className="placeholder:italic placeholder:text-slate-400 block bg-white w-1/2 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                type="text"
                placeholder="Last Name"
                value={data.info[1].text}
                onChange={handleData}
                />
            </div> 
            <input 
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm my-8"
            type="text"
            placeholder="Profession"
            value={data.info[2].text}
            onChange={handleData}
            />
            <label 
            htmlFor="file"
            id="filePicture"
            className="text-xl"
            >
                {data.fileName ? data.fileName : "ChoosePicture"}
            </label>
            <input 
            className="block w-full text-sm text-slate-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-violet-50 file:text-violet-700
            hover:file:bg-violet-100 py-8"
            type="file"
            id="file"
            accept="image/*"
            onChange={pictureUpload}
            />
            <textarea 
            className="resize-none border border-slate-300 rounded-md p-2 pr-3"
            cols="30"
            rows="10"
            maxLength={520} 
            placeholder="Tell something about yourself"
            value={data.info[3].text}
            onChange={handleData}
            />

        </div>
    )
}

export default PersonalInfo;