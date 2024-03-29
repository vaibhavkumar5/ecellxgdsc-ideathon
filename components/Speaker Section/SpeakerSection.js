import Image from "next/image";
import React from "react";
import SubHeading from "../SubHeading";
import SpeakerCard from "./SpeakerCard";

function SpeakerSection() {
  const judges = [
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
    {
      id: 3,
      name: "Jaspal Singh",
      picture: "https://i.imgur.com/rMB44eL.jpg",
      Designation: "Co-Founder",
      Company: "Gramya Ventures",
      LinkedIn: "https://www.linkedin.com/in/jaspal-singh-157192158/",
    },
  ];

  const speakers = [
    {
      id: 1,
      name: "Aditya Agrawal",
      picture: "/aditya_agrawal.jpg",
      Designation: "SDE",
      Company: "Amazon Web Services",
      LinkedIn: "https://www.linkedin.com/in/adityaagrawaldelhi/"
    },
    {
      id: 2,
      name: "Anuj Gupta",
      picture: "/anuj_gupta.jpeg",
      Designation: "SDE",
      Company: "Swiggy",
      LinkedIn: "https://www.linkedin.com/in/anujj-gupta/"
    }
  ]

  return (
    <div className="section p-4 sm:p-8 image relative">
      {/* speaker */}
      <div className="Speaker-Seciton-Heading">
        <SubHeading head="Speaker" />
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
      {/* judges */}
      <div className="Speaker-Seciton-Heading">
        <SubHeading head="Judges" />
      </div>
      <div className="flex justify-center items-center flex-wrap">
        {judges?.map((judge) => (
          <SpeakerCard
            key={judge.id}
            name={judge.name}
            picture={judge.picture}
            Designation={judge.Designation}
            Company={judge.Company}
            Linkedin={judge.LinkedIn}
          />
        ))}
      </div>
    </div>
  );
}

export default SpeakerSection;
