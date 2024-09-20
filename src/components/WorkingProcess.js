import { title } from "process";
import React from "react";

const WorkingProcess = () => {
  const array = [
    {
      title: "Initial Consultation",
      subTitle:
        "The process often begins with an initial consultation between the designer/architect. Get started from here.",
    },
    {
      title: "Concept Development",
      subTitle:
        "In this stage, the designer/architect gathers detailed information about the project requirements.",
    },
  ];

  const array2 = [
    {
      title: "Design Development",
      subTitle:
        "Depending on the project scope and location, the designer/architect may assist the client in obtaining.",
    },
    {
      title: "Permitting & Approvals",
      subTitle:
        "Depending on the project scope and location, the designer/architect may assist the client. We work to make you 100% happy.",
    },
    {
      title: "Project Closeout",
      subTitle:
        "Once construction is complete, the designer/architect conducts a final inspection of the project.",
    },
  ];

  return (
    <div className="working-process">
      <div className="working-process-top">
        {/* <div className="working-process-head">
          <p className="working-process-title">SERVICES</p>
          <p className="working-process-description">Our Working Process</p>
        </div> */}
        <div className="working-process-bottom">
          {array.map((item, index) => (
            <div className="working-process-card" key={index}>
              <p className="working-process-card-number">{index + 1}</p>
              <p className="working-process-card-title">{item.title}</p>
              <p className="working-process-card-subtitle">{item.subTitle}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="working-process-bottom">
        {array2.map((item, index) => (
          <div className="working-process-card" key={index}>
            <p className="working-process-card-number">{index + 1}</p>
            <p className="working-process-card-title">{item.title}</p>
            <p className="working-process-card-subtitle">{item.subTitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkingProcess;
