import React from "react";

import { Link, useLocation } from "react-router-dom";

function BreadCrumbs() {
  const location = useLocation();
  let pathsArray = location.pathname.split("/").filter((item) => item !== "");
  return (
    <div
      style={{
        marginBottom: "0.7rem",
        backgroundColor: "darkgray",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      {pathsArray.map((item, index) => {
        return index !== 0 ? (
          <span key={index}>
            {" "}
            <Link to={pathsArray.slice(0, index + 1).join("/")}>/ {item}</Link>
          </span>
        ) : (
          <span key={index}>
            {" "}
            <Link to={pathsArray.slice(0, index + 1).join("/")}> {item}</Link>
          </span>
        );
      })}
    </div>
  );
}

export default BreadCrumbs;
