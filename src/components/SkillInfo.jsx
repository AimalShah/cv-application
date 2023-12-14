const SkillInfo = ({ data, handleSkill, addSkill, removeSkill }) => 
{
    return(
        <div>
            <h2 className="text-2xl my-8">Skills</h2>

            {
                data.skills.map(skill => (
                    <div className="flex gap-4 my-2 items-center"  key={skill.id}>
                        <input 
                        className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm my-2"
                        id={skill.id}
                        type="text"
                        placeholder="Enter your skill"
                        value={skill.text}
                        onChange={handleSkill}
                        maxLength={20}
                        />
                        {data.skills.length > 1 && <button onClick={() => removeSkill(skill.id)} className="p-2 bg-red-800 rounded-md text-white">X</button>
                        }
                    </div>
                ))
            }
            {
                <button className="bg-indigo-500 rounded-md p-2 my-2 mx-2 text-white" onClick={addSkill}>
                    Add Skill
                </button>
            }
        </div>

    )
};

export default SkillInfo;
