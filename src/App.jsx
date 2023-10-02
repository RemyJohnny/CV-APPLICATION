import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import EducationalInfo from "./components/educational_info.jsx";
import PersonalInfo from "./components/personal_info.jsx";
import ExperienceInfo from "./components/experience_info.jsx";
import { example } from "./example.js";
import Preview from "./components/preview.jsx";

function App() {
  const [resumeData, setResumeData] = useState(example);

  const addEvent = (section) => {
    if (section === "education") {
      setResumeData({
        ...resumeData,
        education: [
          ...resumeData.education,
          {
            key: uuidv4(),
            school: "",
            degree: "",
            startDate: "",
            endDate: "",
          },
        ],
      });
    } else if (section === "experience") {
      setResumeData({
        ...resumeData,
        experience: [
          ...resumeData.experience,
          {
            key: uuidv4(),
            companyName: "",
            position: "",
            startDateEX: "",
            endDateEX: "",
            desc: "",
          },
        ],
      });
    }
  };

  const onchangeEvent = (e, key, section) => {
    if (section === "education") {
      setResumeData({
        ...resumeData,
        education: resumeData.education.map((edu) => {
          if (edu.key === key) {
            edu[e.target.name] = e.target.value;
          }
          return edu;
        }),
      });
    } else if (section === "experience") {
      setResumeData({
        ...resumeData,
        experience: resumeData.experience.map((exp) => {
          if (exp.key === key) {
            exp[e.target.name] = e.target.value;
          }
          return exp;
        }),
      });
    }
  };

  const removeEvent = (key, section) => {
    if (section === "education") {
      setResumeData({
        ...resumeData,
        education: resumeData.education.filter((edu) => edu.key !== key),
      });
    } else if (section === "experience") {
      setResumeData({
        ...resumeData,
        experience: resumeData.experience.filter((exp) => exp.key !== key),
      });
    }
  };

  return (
    <div className=" flex flex-col  md:grid md:grid-cols-6 m-8 text-sm gap-4">
      <div className=" col-span-2">
        <div className=" bg-white flex flex-wrap p-4 mb-4 sticky rounded-xl font-poppins">
          <button
            className=" flex-grow px-2 text-red-800 flex items-center gap-2 font-bold"
            onClick={() => {
              setResumeData({
                fullName: "",
                email: "",
                tel: "",
                address: "",
                education: [
                  {
                    key: uuidv4(),
                    school: "",
                    degree: "",
                    startDate: "",
                    endDate: "",
                  },
                ],
                experience: [
                  {
                    key: uuidv4(),
                    companyName: "",
                    position: "",
                    startDateEX: "",
                    endDateEX: "",
                    desc: "",
                  },
                ],
              });
            }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
            Clear resume
          </button>
          <button
            className=" bg-[#0000e127] flex-grow py-1"
            onClick={() => {
              setResumeData(example);
            }}>
            Load Example
          </button>
        </div>

        <PersonalInfo
          fullName={resumeData.fullName}
          onNameChange={(e) =>
            setResumeData({ ...resumeData, fullName: e.target.value })
          }
          email={resumeData.email}
          onEmailChange={(e) =>
            setResumeData({ ...resumeData, email: e.target.value })
          }
          tel={resumeData.tel}
          onTelChange={(e) =>
            setResumeData({ ...resumeData, tel: e.target.value })
          }
          address={resumeData.address}
          onAddressChange={(e) =>
            setResumeData({ ...resumeData, address: e.target.value })
          }
        />

        <EducationalInfo
          data={resumeData}
          onChange={onchangeEvent}
          onDelete={removeEvent}
          onAdd={addEvent}
        />

        <ExperienceInfo
          data={resumeData}
          onChange={onchangeEvent}
          onDelete={removeEvent}
          onAdd={addEvent}
        />
      </div>

      <Preview data={resumeData} />
    </div>
  );
}

export default App;
