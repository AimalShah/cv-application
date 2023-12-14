

function ContactForm({data,handleData}) {
  return (
    <div className="ContactForm">
        <h2 className="text-3xl my-8"> 
            Contacts
        </h2>
        <input 
        className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm my-2"
            type="text" 
            placeholder="Address" 
            maxLength={80}
            value={data.info[6].text}
            onChange={handleData}/>
        <div className="flex gap-2">
            <input 
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm my-2"
                type="email" 
                placeholder="E-Mail" 
                maxLength={80}
                value={data.info[7].text}
                onChange={handleData}/>
            <input 
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm my-2"
                type="tel" 
                placeholder="Phone number" 
                maxLength={15}
                value={data.info[8].text}
                onChange={handleData}/>
        </div>
        <input 
        className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm my-2"
            type="link" 
            placeholder="Link to portfolio" 
            maxLength={80}
            value={data.info[9].text}
            onChange={handleData}/>     
    </div>
  )
}

export default ContactForm