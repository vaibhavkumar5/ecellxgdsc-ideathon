import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdOutlineAppRegistration, MdAssignmentTurnedIn, MdDesignServices,MdAssignment} from "react-icons/md";

const React_Timeline = () => {
  return (
    <div className="TimelineE w-4/5 mx-auto">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--content"
          
          date="12 March 2023"
          iconStyle={{ background: "rgba(67, 45, 29, 1)", color: "#fff" }}
          icon={<MdOutlineAppRegistration />}
        >
          <h1 className="font-bold font-gilroy text-xl">Registrations Start</h1>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="28 March 2023"
          iconStyle={{ background: "rgba(67, 45, 29, 1)", color: "#fff" }}
           icon={<MdAssignmentTurnedIn />}
        >
          
          <h1 className="font-bold font-gilroy text-xl">Registration Ends</h1>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="25 March 2023"
          iconStyle={{ background: "rgba(67, 45, 29, 1)", color: "#fff" }}
          icon={<MdDesignServices />}
        >
          
          <h1 className="font-bold font-gilroy text-xl">You can start working on your prototype</h1>

        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="1pm  29 March 2022 ADGITM "
          iconStyle={{ background: "rgba(67, 45, 29, 1)", color: "#fff" }}
           icon={<MdAssignment />}
        >
          
          <h1 className="font-bold font-gilroy text-xl">Round 1 </h1>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date=" 3:30pm 29 March 2022"
          iconStyle={{ background: "rgba(67, 45, 29, 1)", color: "#fff" }}
          icon={<MdAssignment />}
        >
          
          <h1 className="font-bold font-gilroy text-xl">
            Round 2
          </h1>
        </VerticalTimelineElement>

        
       
      </VerticalTimeline>
    </div>
  );
};

export default React_Timeline;
