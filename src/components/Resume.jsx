import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone,faEnvelope,faGlobe,faMapLocationDot } from "@fortawesome/free-solid-svg-icons"

const Resume = ({ data , reference }) => {
  return (
    <div className="p-12 sticky top-3 border border-slate-950 " ref={reference}>
      <div>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="lg:text-3xl font-bold px-4">
              {data.info[0].text.toUpperCase()}{" "}
              {data.info[1].text.toUpperCase()}
            </h1>
            <h2 className="py-2 px-4 bg-slate-950 rounded-full text-white text-center font-bold  lg:text-2xl text-xs my-2">
              {data.info[2].text.toUpperCase()}
            </h2>
          </div>
          <div className="bg-slate-600  w-24 lg:w-32 as rounded-full aspect-square">
            <img
              src={data.fileSrc}
              alt={data.fileName}
              className="bg-slate-600 w-24 lg:w-32 as rounded-full aspect-square object-cover"
            />
          </div>
        </div>
        <p className="block w-full my-4 text-justify text-xs lg:text-base">
          {data.info[3].text}
        </p>
        {/* line */}
        <div className="bg-slate-950 h-2 rounded-full my-4"></div>
        {/* line */}
      </div>
      <div>
        <h1 className="lg:text-3xl font-bold">Experience</h1>
        <div className="flex flex-row justify-between text-justify my-4">
          {data.experiences.map((element) => (
            <div
              className="max-w-[320px] lg:w-full w-2/5 "
              key={element.id}
            >
              <h3 className="bg-slate-950 rounded-full p-2 text-white text-center font-bold lg:text-base text-xs mb-2">
                {element.position}
              </h3>
              <p className="my-2 font-semibold text-xs lg:text-base">
                {element.company} | {element.startDate} - {element.endDate}
              </p>
              <p className="workDescription text-xs lg:text-base">{element.description}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-between text-justify mt-10 mb-0 ">
          <div className="max-w-[320px] lg:w-full w-2/5">
            <h1 className="lg:text-3xl font-bold lg:text-3xl text-base">Education</h1>
            <h2 className="lg:text-base text-sm my-2 font-semibold">{data.info[4].text}</h2>
            <p className="lg:text-base text-sm">{data.info[5].text}</p>
          </div>
          <div className="max-w-[320px] lg:w-full w-2/5">
            <h1 className="lg:text-3xl font-bold">Skills</h1>
            <div className="grid  grid-cols-3  grid-rows-4 gap-2  ">
              {data.skills.map((skill) => (
                <p className=" bg-slate-950 my-2 rounded-md p-2 text-white text-center font-bold text-sm " key={skill.id}>
                  {skill.text}
                </p>
              ))}
            </div>
          </div>
        </div>
         {/* line */}
         <div className="bg-slate-950 h-2 rounded-full"></div>
        {/* line */}
      </div>
      <div className="my-8">
            <div className="flex justify-between text-left">
                <div className="flex gap-4">
                    <FontAwesomeIcon icon={faMapLocationDot} size="xl" className="logos" />
                    <p>{data.info[6].text}</p>
                </div>
                <div className="flex gap-4">
                    <FontAwesomeIcon icon={faPhone} size="xl" className="logos" />
                    <p>{data.info[8].text}</p>
                </div>
            </div>
            <div className="flex justify-between text-left mt-8">
                <div className="flex gap-4">
                    <FontAwesomeIcon icon={faEnvelope} size="xl" className="logos" />
                    <p>{data.info[7].text}</p>
                </div>
                <div className="flex gap-4">
                    <FontAwesomeIcon icon={faGlobe} size="xl" className="logos" />
                    <p>{data.info[9].text}</p>
                 </div>
            </div>
        </div>
    </div>
  );
};
export default Resume;
