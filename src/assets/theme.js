import React from "react";

export default function Theme({ children, theme }) {
  return <header className={theme}>{children}</header>;
}
Theme.defaultProps = {
  theme: "defaultTheme",
};
