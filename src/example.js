import { v4 as uuidv4 } from "uuid";
export const example = {
  fullName: "Remy Johnny",
  email: "example123@gmail.com",
  tel: "+375 25 695 58 19",
  address: " Minsk, Belarus",
  education: [
    {
      key: uuidv4(),
      school: "Miva University",
      degree: "Bachelor's degree in Computer Science",
      startDate: "06/11/2018",
      endDate: "14/10/2023",
    },
    {
      key: uuidv4(),
      school: "belarusian State University",
      degree: "masters in IoT",
      startDate: "06/11/2023",
      endDate: "present",
    },
  ],
  experience: [
    {
      key: uuidv4(),
      companyName: "RemyAccess Tech inc",
      position: "React frontEnd Developer",
      startDateEX: "23/05/2023",
      endDateEX: "present",
      desc: "working with React framework and tailwind CSS to design and prototype user interface patterns for various clients in various industries",
    },
    {
      key: uuidv4(),
      companyName: "Apple inc",
      position: "software Engineer intern",
      startDateEX: "01/09/2023",
      endDateEX: "present",
      desc: "working with product team to plan ant set timelines for future projects,and also test completed programs and application against client requirements",
    },
  ],
};
