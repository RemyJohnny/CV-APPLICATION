/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Button from "./button.jsx";

export default function ExperienceInfo({ data, onChange, onDelete, onAdd }) {
  const [isActive, setIsActive] = useState(data.experience.length - 1);

  useEffect(() => {
    setIsActive(data.experience.length - 1);
  }, [data.experience]);

  return (
    <div className="  flex flex-col justify-center items-center font-poppins bg-white p-4 rounded-xl">
      <h1 className=" text-3xl py-4 font-bold text-green-900">Experience</h1>

      {data.experience.map((exp, i) =>
        isActive === i ? (
          <div key={exp.key}>
            <label>
              Company Name
              <input
                type="text"
                name="companyName"
                placeholder="Company name"
                value={exp.companyName}
                onChange={(e) => onChange(e, exp.key, "experience")}
                className=" block"
              />
            </label>

            <label>
              Position
              <input
                type="text"
                name="position"
                placeholder="Position Title"
                value={exp.position}
                onChange={(e) => onChange(e, exp.key, "experience")}
                className=" block"
              />
            </label>

            <label>
              Start Date
              <input
                type="text"
                name="startDateEX"
                placeholder="Start date"
                value={exp.startDateEX}
                onChange={(e) => onChange(e, exp.key, "experience")}
                className=" block"
              />
            </label>

            <label>
              End Date
              <input
                type="text"
                name="endDateEX"
                placeholder="End date"
                value={exp.endDateEX}
                onChange={(e) => onChange(e, exp.key, "experience")}
                className=" block"
              />
            </label>

            <label>
              Description
              <textarea
                name="desc"
                placeholder="Description"
                value={exp.desc}
                onChange={(e) => onChange(e, exp.key, "experience")}
                rows={4}
                className=" block bg-blue-100 w-full box-border px-6 pt-4"></textarea>
            </label>

            <div className=" flex flex-wrap gap-2 justify-center items-center py-4">
              <Button
                child={"Delete"}
                fill={{ color: "red" }}
                onclick={() => onDelete(exp.key, "experience")}
              />
              <Button
                child={"Save"}
                fill={{ background: "blue", color: "white", border: "none" }}
                onclick={() => setIsActive(null)}
              />
            </div>
          </div>
        ) : (
          <h1
            key={exp.key}
            onClick={() => setIsActive(i)}
            className=" bg-blue-100 w-full p-4 mb-3 text-xl font-bold text-center rounded-md">
            {exp.companyName}
          </h1>
        )
      )}

      <Button
        onclick={() => onAdd("experience")}
        child={
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <span>Add Education</span>
          </div>
        }
        fill={{ marginTop: "2rem" }}
      />
    </div>
  );
}
