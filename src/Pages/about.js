import React from "react";
import IMG from "../images/IMG_202004-011.jpg";
import Skills from "../assets/skills";

export const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-div">
          <img className="pic" src={IMG} alt="Myself" />
          <h2 id="h2Tag">Mncedisi Caiphus Makhaza</h2>
          <h3>Junior Business Analyst</h3>
          <div></div>
          <p id="pTag1">
            Solution-driven Business Analyst, no experience yet.
            <br /> Collaborative, can work with cross-functional teams in the
            development, documentation and delivery of process innovations
            driving the accomplishments of business goals,
            <br /> Seek opportunitties to transform company practise into fresh,
            cost-effective solutions leading to more efficient operations!
          </p>
          <h3>Toolkit</h3>
          <p id="pTag1">
            <ul>• Microsoft Office</ul>
            <ul>• Microsoft Visio</ul>
            <ul>• Microsoft Powerpoint</ul>
            <ul>• Microsoft Power BI</ul>
            <ul>• Google Docs</ul>
            <ul>• Trello</ul>
          </p>
          <div></div>
        </div>
        <div className="edu">
          <h2 id="h2Tag">Education</h2>
          <span>2017-2019 • Durban University of Technology</span>
          <h4>
            Information and Communication Technology Diploma in Business
            Analysis
          </h4>
          <p id="pTag">
            Furthermore, they will be able to analyse business
            <br /> environments and create specifications for ICT solutions to
            facilitate <br /> the alignment of IT and business processes.
          </p>
          <hr></hr>
          <span>2011-2012 • Mnambithi FET College</span>
          <h4>N6 Diploma in Financial Management</h4>
          <p id="pTag">
            Learners will demonstrate the ability to select and apply financial
            <br />
            management methods, procedures or techniques within the business
            environment,
            <br /> the basic legal aspects of a business as well as managerial
            skills. The programme reflects
            <br /> on the needs of the business sector
          </p>
          <hr></hr>
          <h2 id="h2Tag">Working Experience</h2>
          <span>NOVEMBER 2012 – JANUARY 2017 • Khethekile Mining</span>
          <p id="pTag">
            Designation: Electric Drill Operator • (Safety Representative)
            <br />
            Reference: Jessica Leroux (+27) 82 658 5419
          </p>
        </div>
      </div>
      <Skills />
    </>
  );
};
export default About;
