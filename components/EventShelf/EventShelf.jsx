import React from "react";
import SubHeading from "../SubHeading";
import Link from "next/link";
import Image from "next/image";

const EventShelf = () => {
  return (
    <div id="events" className="content-center p-4 mb-14 sm:p-8">
      <div>
        <SubHeading head="THEMES" />
      </div>

      <div className="pt-8">
        <Image
          src="/sdg.webp"
          width={96}
          height={48}
          layout="responsive"
        />
        <div
          className="text-center text-4xl font-consolas mt-5"
        >
          <div>OR</div>
          <div className="font-semibold">Open Innovation</div>
        </div>
      </div>
    </div>
  );
};

export default EventShelf;
