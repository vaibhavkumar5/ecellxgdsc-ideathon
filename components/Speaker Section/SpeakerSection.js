import Image from "next/image";
import React from "react";
import SubHeading from "../SubHeading";
import SpeakerCard from "./SpeakerCard";

function SpeakerSection() {
  const speakers = [
    {
      id: 1,
      name: "Deekshita Verma",
      picture:
        "https://i.imgur.com/s5i9ixl.jpg",
      Designation: "SWE at Google",
      Company: "Major League Hacking",
      LinkedIn: "https://www.linkedin.com/in/DeekshitaV",
    },
    {
      id: 2,
      name: "Nitin Rakesh",
      picture: "https://i.imgur.com/FEIxMeF.jpg",
      Designation: "CTO",
      Company: "ExamVat",
      LinkedIn: "https://www.linkedin.com/in/nitin-rakesh-282559119",
    },

  ];

  return (
    <div className="section p-4 sm:p-8 image relative">
      <div className="Speaker-Seciton-Heading">
        <SubHeading head="Judges" />
        {/* <h2 className="text-5xl flex p-[1vmax] justify-center items-center text-[#264653] font-bold font-['TabernaSans-Black']"></h2> */}
      </div>
      <div className="flex justify-center items-center flex-wrap">
        {speakers?.map((speaker) => (
          <SpeakerCard
            key={speaker.id}
            name={speaker.name}
            picture={speaker.picture}
            Designation={speaker.Designation}
            Company={speaker.Company}
            Linkedin={speaker.LinkedIn}
          />
        ))}
      </div>
    </div>
  );
}

export default SpeakerSection;
