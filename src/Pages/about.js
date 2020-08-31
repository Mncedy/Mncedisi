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
          <p>Brief Objectives about me!!</p>
          <div></div>
        </div>
        <div className="edu">
          <h2 id="h2Tag">Education</h2>
          <span>2017-2019 Durban University of Technology</span>
          <h4>ICT Diploma in Business Analysis</h4>
          <p id="pTag">
            Furthermore, they will be able to analyse business
            <br /> environments and create specifications for ICT solutions to
            facilitate <br /> the alignment of IT and business processes.
          </p>
          <hr></hr>
          <span>2011-2012 Mnambithi FET College</span>
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
          <h2 id="h2Tag">Experience</h2>
          <span>2013-2016 Khethekile Mining</span>
          <p pTag>Elcectric Drill operator</p>
        </div>
      </div>
      <Skills />
    </>
  );
};
export default About;
