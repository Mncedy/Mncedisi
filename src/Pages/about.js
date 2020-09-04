import React from "react";
import IMG from "../images/IMG_202004-011.jpg";

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
            <strong>
              Solution-driven Business Analyst, no experience yet.
              <br /> Collaborative, can work with cross-functional teams in the
              development, documentation and delivery of process innovations
              driving the accomplishments of business goals,
              <br /> Seek opportunitties to transform company practise into
              fresh, cost-effective solutions leading to more efficient
              operations!
            </strong>
          </p>
          <h3>Toolkit</h3>
          <p id="pTag1">
            <strong>
              <ul>• Microsoft Office</ul>
              <ul>• Microsoft Visio</ul>
              <ul>• Microsoft Powerpoint</ul>
              <ul>• Microsoft Power BI</ul>
              <ul>• Google Docs</ul>
              <ul>• Trello</ul>
            </strong>
          </p>
          <div></div>
          <h3>Course key areas</h3>
          <div>
            <p id="pSkill">
              <strong>
                • Gathering Requirements (Project Charter, Business Requirements
                Document),
                <br /> • Information Management (Microsoft SQL),
                <br /> • Business Information System Analysis,
                <br /> • Strategy analysis - Defining the BA stakeholder
                collaboration tasks to identify strategic need and importance of
                the change and align this with greater organizational
                strategies.,
                <br /> • Elicitation and collaboration - Defining the tasks to
                obtain information and communication with stakeholders,
                <br /> • Underlying Competencies,
                <br /> • SAP Enterprise Resource Planning Software System
                (Procurement, Material Planning, Sales Order Management).
                <br /> • ASP.NET MVC
              </strong>
            </p>
          </div>
        </div>
        <div className="edu">
          <h2 id="h2Tag">Education</h2>
          <h4>
            February 2017- November 2019
            <br /> • Durban University of Technology
          </h4>
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
          <h4>
            February 2011- June 2012
            <br /> • Mnambithi FET College
          </h4>
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
          <h4>
            NOVEMBER 2012 – JANUARY 2017
            <br /> • Khethekile Mining
          </h4>
          <p id="pTag">
            Designation: Electric Drill Operator • (Safety Representative)
            <br />
            Reference: Jessica Leroux
            <br /> Phone: (+27) 82 658 5419
          </p>
        </div>
      </div>
    </>
  );
};
export default About;
