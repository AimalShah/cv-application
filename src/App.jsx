import { useState , useRef } from "react";
import PersonalInfo from "./components/PersonalInfo";
import Resume from "./components/Resume";
import EducationInfo from "./components/EducationInfo";
import ExperienceInfo from "./components/ExperienceInfo";
import SkillInfo from "./components/SkillInfo";
import ContactForm from "./components/ContactForm";
import CV from "./components/sampleCv";
import { useReactToPrint } from 'react-to-print'
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [data, setData] = useState({
    fileName: "",
    fileSrc: "",
    info: [
      {
        name: "First Name",
        text: "",
      },
      {
        name: "Last Name",
        text: "",
      },
      {
        name: "Profession",
        text: "",
      },
      {
        name: "Tell something about yourself",
        text: "",
      },
      {
        name: "School",
        text: "",
      },
      {
        name: "Degree",
        text: "",
      },
      {
        name: "Address",
        text: "",
      },
      {
        name: "E-Mail",
        text: "",
      },
      {
        name: "Phone number",
        text: "",
      },
      {
        name: "Link to portfolio",
        text: "",
      },
    ],
    experiences: [
      {
        id: uuidv4(),
        position: "",
        company: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ],
    skills: [
      {
        id: uuidv4(),
        text: "",
      },
    ],
  });

  const pictureUpload = (e) => {
    setData({
      ...data,
      fileName: e.target.files[0].name,
      fileSrc: URL.createObjectURL(e.target.files[0]),
    });
  };
  const handleData = (e) => {
    setData({
      ...data,
      info: data.info.map((element) => {
        if (element.name === e.target.placeholder)
          element.text = e.target.value;
        return element;
      }),
    });
  };
  const handleExperience = (e, id) => {
    setData({
      ...data,
      experiences: data.experiences.map((experience) => {
        if (experience.id === id) experience[e.target.name] = e.target.value;
        return experience;
      }),
    });
  };
  const addExperience = () => {
    setData({
      ...data,
      experiences: [
        ...data.experiences,
        {
          id: uuidv4(),
          position: "",
          company: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    });
  };

  const removeExperience = (id) => {
    setData({
      ...data,
      experiences: data.experiences.filter(
        (experience) => experience.id !== id
      ),
    });
  };

  const addSkill = () => {
    setData({
      ...data,
      skills: [
        ...data.skills,
        {
          id: uuidv4(),
          text: "",
        },
      ],
    });
  };

  const removeSkill = (id) => {
    setData({
      ...data,
      skills: data.skills.filter((skill) => skill.id !== id),
    });
  };

  const handleSkill = (e) => {
    setData({
      ...data,
      skills: data.skills.map((skill) => {
        if (skill.id === e.target.id) skill.text = e.target.value;
        return skill;
      }),
    });
  };
  const loadCv = (e) => {
    setData(CV);
    e = "";
  };
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `${data.info[0].text}'s Resume`,
  });
  return (
    <div className="flex gap-10 m-5 lg:m-12 max-w-screen lg:flex-row flex-col">
      <div className="border border-slate-900 px-8 py-4">
        <div>
          <button className="bg-indigo-500 rounded-md p-2 my-2 mx-2 text-white" onClick={loadCv}>load sample</button>
          <button className="bg-indigo-500 rounded-md p-2 my-2 text-white" onClick={handlePrint}>Download</button>
          
        </div>
        <PersonalInfo
          data={data}
          handleData={handleData}
          pictureUpload={pictureUpload}
        />
        <ExperienceInfo
          handleExperience={handleExperience}
          addExperience={addExperience}
          data={data}
          removeExperience={removeExperience}
        />
        <EducationInfo data={data} handleData={handleData} />
        <SkillInfo
          data={data}
          addSkill={addSkill}
          removeSkill={removeSkill}
          handleSkill={handleSkill}
        />
        <ContactForm data={data} handleData={handleData} />
      </div>
      <div className="lg:w-1/2  w-full">
        <Resume data={data}  reference={componentRef}/>
      </div>
    </div>
  );
};

export default App;
