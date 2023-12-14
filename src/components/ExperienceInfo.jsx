const ExperienceInfo = ({
  data,
  addExperience,
  removeExperience,
  handleExperience,
}) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-2xl my-8">Experience Details</h2>
      {data.experiences.map((experience, index) => (
        <div className=""  key={experience.id}>
          {data.experiences.length > 1 && <div className="flex my-2 justify-between border p-2 rounded border-slate-400">
            <h3 className="text-xl">Experience {index + 1}</h3>
            <button onClick={() => removeExperience(experience.id)} className="bg-red-800 rounded-md px-4 py-2 text-white">
                remove
            </button>
          </div> }
          <div className="flex flex-col w-full" key={experience.id + 1}>
            <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm my-8"
              type="text"
              placeholder="position"
              name="position"
              id="position"
              
              value={experience.position}
              onChange={(e) => handleExperience(e, experience.id)}
              />
            <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm my-8"
              type="text"
              placeholder="Company"
              name="company"
              id="company"
              value={experience.company}
              onChange={(e) => handleExperience(e, experience.id)}
              />
            <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm my-8"
              type="text"
              placeholder="Start date of employment"
              name="startDate"
              id="start-date"
              value={experience.startDate}
              onChange={(e) => handleExperience(e, experience.id)}
              />
            <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm my-8"
              type="text"
              placeholder="End date of employment"
              name="endDate"
              id="end-date"
              value={experience.endDate}
              onChange={(e) => handleExperience(e, experience.id)}
            />
            <textarea
            className="resize-none rounded-md p-2 border border-slate-300"
            placeholder="Your main occupation , daily tasks and work field"
            maxLength={400}
            cols="30"
            rows="6"
            name="description"
            id="description"
            value={experience.description}
            onChange={e => handleExperience(e , experience.id)}
            />
          </div>
        </div>
      ))}
      {
        data.experiences.length < 2 && 
        <button onClick={addExperience} className="bg-indigo-500 rounded-md p-2 my-2 text-white">
            add
        </button>
      }
    </div>
  );
};

export default ExperienceInfo;
