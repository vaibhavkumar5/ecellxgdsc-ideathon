import React from "react";
import SubHeading from "../SubHeading";
import Link from "next/link";

function AboutSection() {
  return (
    <div id="about" className="content-center p-4 mb-14 sm:p-8">
      <div className="hidden md:inline">
        <SubHeading head="Rule Book" />
      </div>
      <div className="md:hidden">
        <SubHeading head="Rule Book " />
      </div>
      <div className="w-[100%] md:w-4/5 mx-auto space-y-8 mt-8 text-[#432d1d]">
        <div className="font-consolas text-justify text-xl md:text-2xl">
          Welcome to the Ideathon organized by Ecell and GDSC! We are excited to
          have you participate in this event where you will have the opportunity
          to showcase your innovative ideas and turn them into reality. In this
          document, we will outline the rules and procedures for the Ideathon,
          as well as provide you with information on how to prepare for the
          event.
        </div>

        <div className="hidden md:inline">
          <SubHeading head="Rules" />
        </div>
        <div className="md:hidden">
          <SubHeading head="Rules " />
        </div>

        <div className="font-consolas text-justify text-xl md:text-2xl">
          <ol>
            <li>
              {" "}
              1. The Ideathon will take place offline, and it will be held at
              Utkarsh, the annual cultural-techno fest of ADGITM (formerly known
              as Northern India Engineering College).
            </li>

            <li className="pt-4">
              {" "}
              2. Participants can work individually or in teams of up to 4
              members.
            </li>

            <li className="pt-4">
              {" "}
              3. The theme for the Ideathon is "Innovative Solutions for
              Sustainability".
            </li>

            <li className="pt-4">
              {" "}
              4. The Ideathon will take place on March 29th, 2023, starting at
              9:00 AM and ending at 6:00 PM.
            </li>

            <li className="pt-4">
              {" "}
              5. Participants can start working on their idea from March 25th,
              2023.
            </li>

            <li className="pt-4">
              {" "}
              6. Participants will be given a problem statement related to
              sustainability, and they will have to come up with an innovative
              solution using technology.
            </li>

            <li className="pt-4">
              {" "}
              7. The solution should be feasible, scalable, and have a positive
              impact on the environment and society.
            </li>

            <li className="pt-4">
              {" "}
              8. Participants will have 8 hours to develop their solution, and
              they will have to submit a video presentation of their idea along
              with a prototype or demo.
            </li>

            <li className="pt-4">
              {" "}
              9. The judging criteria will be based on the idea's feasibility,
              impact, scalability, and innovation. Preparing for the Ideathon:
            </li>
          </ol>
        </div>
            
        <div className="hidden md:inline">
          <SubHeading head="Preparing" />
        </div>
        <div className="md:hidden">
          <SubHeading head="Preparing" />
        </div>

        <div className="font-consolas text-justify text-xl md:text-2xl">
          <ol>
            <li>
              {" "}
              1.  Participants can start preparing for the Ideathon as soon as possible.
            </li>

            <li className="pt-4">
              {" "}
              2. Participants can start researching and brainstorming ideas related to sustainability, and how technology can be used to solve these problems.
            </li>

            <li className="pt-4">
              {" "}
              3.  Participants can start developing their skills in programming, design, and problem-solving.
            </li>

            <li className="pt-4">
              {" "}
              4. Participants can start forming teams or finding partners to work with.
            </li>

            <li className="pt-4">
              {" "}
              5. Participants can attend workshops and webinars organized by Ecell and GDSC to gain knowledge and skills related to sustainability and technology.
            </li>

          </ol>
        </div>

        <div className="font-consolas text-justify text-xl md:text-2xl">
          We encourage all participants to start preparing early and to come up with innovative ideas that can have a positive impact on the environment and society. We wish you all the best of luck and can't wait to see your ideas come to life at the Ideathon!

        </div>

      </div>
      <div className="flex mt-6">
        {/* <button className="mx-auto border p-2 px-3 rounded-lg border-[#432D1D] mt-4 text-lg">
          RULEBOOK
        </button> */}
        <Link href="https://docs.google.com/document/d/1gSLstdq1Tu9LnQQGkKYG7WtPGyzwo2Q7vQHTwlZifkY/edit?usp=sharing">
          <a
            target="_blank"
            type="submit"
            className={`mx-auto font-semibold font-gilroy tracking-wider rounded-full m-2 py-1 md:py-3 px-4 text-lg lg:text-[1.2rem] transition duration-150 ease-in-out Register`}
          >
            RULE BOOK
          </a>
        </Link>
      </div>
    </div>
  );
}

export default AboutSection;
