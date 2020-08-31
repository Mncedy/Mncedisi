import React from "react";

export default function Banner({ title, title2, subtitle, children }) {
  return (
    <div className="banner">
      <h3 className="h33">{title}</h3>
      <h1>{title2}</h1>
      <div></div>
      <p className="p1">{subtitle}</p>
      {children}
    </div>
  );
}
