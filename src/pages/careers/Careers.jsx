import "./Careers.css"; // Assuming you have a CSS file for your component's styles

import { Link, useLoaderData } from "react-router-dom";

export default function Careers() {
  const careers = useLoaderData();

  return (
    <div className="careers">
      {careers.map((career) => (
        <Link to={career.id.toString()} key={career.id} className="career-card">
          <div className="career-info">
            <p className="career-title">{career.title}</p>
            <p className="career-location">Based in {career.location}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

// data loader
export const careersLoader = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const res = await fetch("http://localhost:4000/careers");
  if (!res.ok) {
    throw Error("can not fetch data!!!");
  }

  return res.json();
};
