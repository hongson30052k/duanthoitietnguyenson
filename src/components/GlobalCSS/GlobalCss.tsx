import React from "react";
import "./GlobalCss.css";
const GlobalCss = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default GlobalCss;
