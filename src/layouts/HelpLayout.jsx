import React from "react";

import { NavLink, Outlet, useNavigate } from "react-router-dom";

function HelpLayout() {
  const navigate = useNavigate();

  return (
    <div>
      {" "}
      <h2>website help </h2>
      <p> this is amir website's help </p>
      <nav className="help">
        <NavLink to="faq">FAQ</NavLink>
        <NavLink to="contact">CONTACT US</NavLink>
      </nav>
      <button onClick={() => navigate("/")}>click me </button>
      <Outlet />
    </div>
  );
}

export default HelpLayout;
