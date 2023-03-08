import React from "react";
import SubHeading from "../SubHeading";
import Link from "next/link";

function AboutSection() {
  return (
    <div id="about" className="content-center p-4 mb-14 sm:p-8">
      <div className="hidden md:inline">
        <SubHeading head="ABOUT IDEATHON 2k23" />
      </div>
      <div className="md:hidden">
        <SubHeading head="ABOUT " />
        <SubHeading head="IDEATHON 2k23" />
      </div>
      <div className="w-[100%] md:w-4/5 mx-auto space-y-8 mt-8 text-[#432d1d]">
        <div className="font-consolas text-justify text-xl md:text-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className="font-consolas text-justify text-xl md:text-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
      <div className="flex mt-6">
        {/* <button className="mx-auto border p-2 px-3 rounded-lg border-[#432D1D] mt-4 text-lg">
          RULEBOOK
        </button> */}
        <Link href="#">
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
