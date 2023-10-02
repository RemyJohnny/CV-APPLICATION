/* eslint-disable react/prop-types */
export default function Preview({ data }) {
  return (
    <div className=" col-span-4 bg-white">
      <div className=" bg-teal-900 flex flex-col justify-center items-center text-white py-6 font-poppins">
        <h1 className=" text-4xl ">{data.fullName}</h1>

        <ul className=" flex gap-4 flex-wrap text-l p-4 justify-center">
          <li className=" flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            {data.email}
          </li>

          <li className=" flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            {data.tel}
          </li>

          <li className=" flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            {data.address}
          </li>
        </ul>
      </div>

      <div className=" p-8 font-poppins text-teal-900">
        <div>
          <h1 className=" text-2xl text-center bg-blue-100 font-bold py-2 rounded">
            Education
          </h1>
          <ul className=" text-black flex flex-wrap">
            {data.education.map((edu) => (
              <li key={edu.key} className=" m-4">
                <h1 className=" text-xl font-bold">{edu.school}</h1>
                <h2>{edu.degree}</h2>
                <h3>
                  {edu.startDate} - {edu.endDate}
                </h3>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 ">
          <h1 className=" text-2xl text-center bg-blue-100 font-bold py-2 rounded">
            Experience
          </h1>
          <ul className=" text-black flex flex-wrap">
            {data.experience.map((exp) => (
              <li key={exp.key} className=" m-4">
                <h1 className=" text-xl font-bold">{exp.companyName}</h1>
                <h2 className="font-bold">{exp.position}</h2>
                <h3 className="font-bold">
                  {exp.startDateEX} - {exp.endDateEX}
                </h3>
                <p className=" px-4">{exp.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
