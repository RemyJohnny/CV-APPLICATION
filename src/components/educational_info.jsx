/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Button from "./button.jsx";

export default function EducationalInfo({ data, onChange, onDelete, onAdd }) {
  const [isActive, setIsActive] = useState(data.education.length - 1);

  useEffect(() => {
    setIsActive(data.education.length - 1);
  }, [data.education]);

  return (
    <div className=" flex flex-col justify-center items-center font-poppins bg-white p-4 rounded-xl mb-4">
      <h1 className=" text-3xl py-4 font-bold text-green-900">Education</h1>

      {data.education.map((edu, i) =>
        isActive === i ? (
          <div key={edu.key}>
            <label>
              School
              <input
                type="text"
                value={edu.school}
                name="school"
                placeholder="School / University"
                onChange={(e) => onChange(e, edu.key, "education")}
                className=" block"
              />
            </label>

            <label>
              Degree
              <input
                type="text"
                name="degree"
                placeholder="Degree / Field of Study"
                value={edu.degree}
                onChange={(e) => onChange(e, edu.key, "education")}
                className=" block"
              />
            </label>

            <label>
              Start Date
              <input
                type="text"
                name="startDate"
                placeholder="Start date"
                value={edu.startDate}
                onChange={(e) => onChange(e, edu.key, "education")}
                className=" block"
              />
            </label>

            <label>
              End Date
              <input
                type="text"
                name="endDate"
                placeholder=" End date"
                value={edu.endDate}
                onChange={(e) => onChange(e, edu.key, "education")}
                className=" block"
              />
            </label>

            <div className=" flex flex-wrap gap-2 justify-center items-center py-4">
              <Button
                child={"Delete"}
                fill={{ color: "red" }}
                onclick={() => onDelete(edu.key, "education")}
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
            key={edu.key}
            onClick={() => setIsActive(i)}
            className=" bg-blue-100 w-full p-4 mb-3 text-xl font-bold text-center rounded-md">
            {edu.school}
          </h1>
        )
      )}

      <Button
        onclick={() => onAdd("education")}
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
