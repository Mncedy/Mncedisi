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
        <p>Born and raised in the valley of Bergville.</p>
      </div>
      <div className="contact-div">
        <h2>Contact Me</h2>
        <FaPhoneAlt className="icons" />
        <p> (+27) 76 245 2771</p>
        <MdEmail className="icons" /> <p>Mncedimc@gmail.com</p>
        <FaAddressBook className="icons" />
        <p>
          212 Sphiwe Zuma Avenue <br /> Glenmore <br /> Durban <br /> 4001
        </p>
      </div>
    </div>
  );
};

export default Contact;
