import React from "react";
import IMG from "../images/IMG_202004-011.jpg";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaAddressBook } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-div">
        <h2>Mncedisi Makhaza</h2>
        <img className="pic" src={IMG} alt="Myself" />
        <h3>WHERE I'VE BEEN</h3>
        <p id="contactP">
          Born and raised in the valley of Bergville. And the following is
          cliché but true.
          <br /> I've plough with oxen, harvest the fields, along with all sorts
          of labor intensive jobs, you name it, even worked in the restaurant
          business.
          <br /> After completing matric, I worked in a restuarant Tower of
          Pizza which is nearby my village for a year.
          <br />
          And then after I went to Mncambithi FET college, where I obtained my
          N4, N5 and N6 certification.
          <br /> Few months later I was an employee at Khethekile Mining, where
          i worked as an Electric Drill Operator for 4 years. I was elected as a
          safety representative for my team.
          <br /> All this has given me a new and unique perspective. Whether in
          personal matter or in projects, the same values hold true.
          <br />
          <strong>
            {" "}
            What is the problem? And what is the solution/s for that problem.
          </strong>
        </p>
        <h3>WHAT I'M DOING</h3>
        <p id="contactP">Personal development</p>
        <h3>WHAT I HOPE TO DO</h3>
        <p id="contactP">
          Change the world like Elon musk.., or Disrupt Forbes list like Jeff
          Bezos..
          <br />
          Seriously though... I hope to be the be the best Analyst & husband I
          can possibly be. Everyday is a chance at personal
          improvement/development.
          <br />
          So my plan is to get better, do better. Personally and professionally.
          I am where I am because of my decisions, if I want better results I
          must take better actions.
          <br />
          <strong>
            I've learned the lessons, I will not stop until my goals are
            realize. When I reach that goal I will set a bigger goal. I will
            grow and grow and grow. I accept full responsibility for my results
            in life, and I challenge myself to become better.
            <br />
            Every year, Every month, Everyday, Every moment. I am commited, I am
            determined, I AM SELF-MADE!
          </strong>
        </p>
      </div>
      <div className="contact-div">
        <h2>Contact Me</h2>
        <FaPhoneAlt className="icons" />
        <p>
          <strong> (+27) 76 245 2771</strong>
        </p>
        <MdEmail className="icons" />{" "}
        <p>
          <strong>Mncedimc@gmail.com</strong>
        </p>
        <FaAddressBook className="icons" />
        <p>
          <strong>
            212 Sphiwe Zuma Avenue <br /> Glenmore <br /> Durban <br /> 4001
          </strong>
        </p>
      </div>
    </div>
  );
};

export default Contact;
