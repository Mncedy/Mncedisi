import React from "react";

export default function Work({ title, subtitle, child, children }) {
  return (
    <div className="work">
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <div>{child}</div>
      <p>{children}</p>
    </div>
  );
}
