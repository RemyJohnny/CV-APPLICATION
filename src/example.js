import { v4 as uuidv4 } from "uuid";
export const example = {
  fullName: "Remy Johnny",
  email: "example123@gmail.com",
  tel: "08072905382",
  address: " Minsk  BY",
  education: [
    {
      key: uuidv4(),
      school: "Miva University",
      degree: "Bachelor in Cybersecurity",
      startDate: "06/11/2018",
      endDate: "14/10/2023",
    },
    {
      key: uuidv4(),
      school: "Delta State University",
      degree: "masters in Computer Science",
      startDate: "06/11/2023",
      endDate: "present",
    },
  ],
  experience: [
    {
      key: uuidv4(),
      companyName: "RemyAccess inc",
      position: "Chief technology Officer (CTO)",
      startDateEX: "01/09/2023",
      endDateEX: "present",
      desc: "Designed and prototyped user interface patterns for various clients in various industries",
    },
    {
      key: uuidv4(),
      companyName: "Apple inc",
      position: "sales Manager ",
      startDateEX: "01/09/2023",
      endDateEX: "present",
      desc: "sold 5000 iphone 15 pro max in 2 hours",
    },
  ],
};
