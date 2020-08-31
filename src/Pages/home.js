import React from "react";
import Banner from "../assets/banner";
import { Link } from "react-router-dom";
import Theme from "../assets/theme";

export default function Home() {
  return (
    <>
      <Theme>
        <Banner
          title="Hello, my name is:"
          title2="Mncedisi Makhaza"
          subtitle="Junior Business Analyst | C# | MS SQL | HTML5 | CSS3 | REACTjs"
        >
          <Link to="/" className="btn-download">
            download resume
          </Link>
        </Banner>
      </Theme>
    </>
  );
}
