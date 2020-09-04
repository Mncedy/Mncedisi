import React from "react";

export default function Work({ subtitle, child, children }) {
  return (
    <div className="work">
      <h4>{subtitle}</h4>
      <div>{child}</div>
      <p>{children}</p>
    </div>
  );
}
