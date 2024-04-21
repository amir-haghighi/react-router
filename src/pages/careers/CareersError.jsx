import "./Careers.css";

import React from "react";

import { Link, useRouteError } from "react-router-dom";

function CareersError() {
  const error = useRouteError();
  return (
    <div className="careers-error">
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to="/">Back to home page </Link>
    </div>
  );
}

export default CareersError;
