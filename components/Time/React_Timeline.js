import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdOutlineAppRegistration, MdAssignmentTurnedIn, MdDesignServices, MdAssignment, MdOutlineOnlinePrediction, MdOutlineRedeem } from "react-icons/md";

const React_Timeline = () => {
  return (
    <div className="TimelineE w-4/5 mx-auto">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--content"
          date="21st March 2023"
          iconStyle={{ background: "rgba(67, 45, 29, 1)", color: "#fff" }}
          icon={<MdOutlineAppRegistration />}
        >
          <h1 className="font-bold font-gilroy text-xl">Registrations Start</h1>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="29th March 2023"
          iconStyle={{ background: "rgba(67, 45, 29, 1)", color: "#fff" }}
          icon={<MdAssignmentTurnedIn />}
        >
          <h1 className="font-bold font-gilroy text-xl">Registration Ends</h1>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="26th March 2023"
          iconStyle={{ background: "rgba(67, 45, 29, 1)", color: "#fff" }}
          icon={<MdDesignServices />}
        >
          <h1 className="font-bold font-gilroy text-xl">You can start working on your prototype</h1>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="9AM - 10AM 31st March 2023"
          iconStyle={{ background: "rgba(67, 45, 29, 1)", color: "#fff" }}
          icon={<MdOutlineOnlinePrediction />}
        >
          <h1 className="font-bold font-gilroy text-xl">Opening Ceremony at ADGITM</h1>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="31st March at 1:30pm"
          iconStyle={{ background: "rgba(67, 45, 29, 1)", color: "#fff" }}
          icon={<MdAssignment />}
        >
          <h1 className="font-bold font-gilroy text-xl">Round 1: PPT and Prototype Submission</h1>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="31st March from 2:30PM to 3:30PM, Smart Class Lab"
          iconStyle={{ background: "rgba(67, 45, 29, 1)", color: "#fff" }}
          icon={<MdAssignment />}
        >
          <h1 className="font-bold font-gilroy text-xl">Round 2: Pitching of Shortlisted Candidates</h1>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="31st March 3:30PM to 5PM"
          iconStyle={{ background: "rgba(67, 45, 29, 1)", color: "#fff" }}
          icon={<MdOutlineRedeem />}
        >
          <h1 className="font-bold font-gilroy text-xl">Closing Ceremony at Amphitheatre</h1>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  );
};

export default React_Timeline;
