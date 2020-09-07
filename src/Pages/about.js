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
              <ul>• Microsoft Powerpoint</ul>
              <ul>• Microsoft Power BI</ul>
              <ul>• Microsoft Visio</ul>
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
      </div>
      <div className="edu">
        <h2 id="h2Tag">Education</h2>
        <h4 style={{ color: "red" }}>Tertiary Education</h4>
        <h4>
          Tertiary: Durban University of Technology.
          <br />
          Course duration: February 2020- December 2020.
          <br /> Certification: Advance Diploma in Information and Communication
          Technology(ICT).
          <br /> Status: Complete <input type="checkbox" /> | Inprogress{" "}
          <input type="checkbox" checked="checked" /> | Incomplete{" "}
          <input type="checkbox" />
        </h4>
        <p id="pTag">
          This programme is designed to prepare graduates for the IT industry or
          for postgraduate study through the deepening of their knowledge and
          understanding of theories, methodologies and practices within the
          field of IT and research.
          <h3 style={{ color: "#518fe0" }}>Key Modules</h3>
          <ul>
            <strong>
              • Applied Mathematics for ComputingA(Prob ability & Statistic
            </strong>
          </ul>
          <ul>
            <strong>
              • Applied Mathematics for ComputingB(Discrete Structures & Linear
              Algebra
            </strong>
          </ul>
          <ul>
            <strong>• Data Structures</strong>
          </ul>
          <ul>
            <strong>• Business Intelligence III</strong>
          </ul>
          <ul>
            <strong>• Machine Intelligence III</strong>
          </ul>
          <ul>
            <strong>• Research skills</strong>
          </ul>
        </p>
        <h4>
          Tertiary: Durban University of Technology.
          <br />
          Course duration: February 2017- November 2019.
          <br /> Certification: Diploma in Information and Communication
          Technology Diploma in Business Analysis.
          <br /> Status: Complete <input type="checkbox" checked="checked" /> |
          Inprogress <input type="checkbox" /> | Incomplete{" "}
          <input type="checkbox" />
        </h4>
        <p id="pTag">
          The purpose of the diploma is to provide a professional, vocational or
          career focused qualification for the ICT industry.
          <br /> The knowledge emphasizes general principles and applications.
          Furthermore,
          <br /> the diploma will develop students who can demonstrate focused
          knowledge and skills in Business Analysis and use Information and
          Communications Technology (ICT) in industry to solve business
          problems.
          <br /> Furthermore, they will be able to analyse business environments
          and create specifications for ICT solutions to facilitate the
          alignment of IT and business processes.
          <h3 style={{ color: "#518fe0" }}>Key Modules</h3>
          <ul>
            <strong>• Applications Development (C#)</strong>
          </ul>
          <ul>
            <strong>• Business Analysis</strong>
          </ul>
          <ul>
            <strong>• Business Analysis Project</strong>
          </ul>
          <ul>
            <strong>• Business Information Systems</strong>
          </ul>
          <ul>
            <strong>• Information Management</strong>
          </ul>
          <ul>
            <strong>• IT project Management</strong>
          </ul>
        </p>
        <hr></hr>
        <h4>
          Tertiary: Mnambithi FET College.
          <br />
          Course duration: February 2011- June 2012.
          <br />
          Certification: N6 Diploma in Financial Management.
          <br /> Status: Complete <input type="checkbox" checked="checked" /> |
          Inprogress <input type="checkbox" /> | Incomplete{" "}
          <input type="checkbox" />
        </h4>
        <p id="pTag">
          Learners will demonstrate the ability to select and apply financial
          management methods, procedures or techniques within the business
          environment, the basic legal aspects of a business as well as
          managerial skills. The programme reflects on the needs of the business
          sector.
        </p>
        <hr></hr>
        <h2 id="h2Tag">Working Experience</h2>
        <h4>
          Company: Khethekile Mining PTY (LTD).
          <br />
          Duration: NOVEMBER 2012 – JANUARY 2017
        </h4>
        <p id="pTag">
          Designation: Electric Drill Operator • (Safety Representative)
          <br />
          Reference: Jessica Leroux
          <br /> Phone: (+27) 82 658 5419
        </p>
      </div>
    </>
  );
};
export default About;
