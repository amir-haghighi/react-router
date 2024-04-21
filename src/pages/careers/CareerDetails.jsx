import "./Careers.css"; // Assuming you have a CSS file for your component's styles

import { useLoaderData } from "react-router-dom";

function CareerDetails() {
  // const { id } = useParams();
  const careerData = useLoaderData();
  return (
    <div className="career-details">
      <div className="career-title-container">
        <h2 className="career-title">Career Details</h2>
      </div>
      <div className="career-info">
        <h2 className="career-heading">{careerData.title}</h2>
        <p className="career-salary">Starting Salary: {careerData.salary}</p>
        <p className="career-location">Location: {careerData.location}</p>
        <p className="career-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          doloremque ipsam impedit, explicabo tenetur natus sed molestias dolor
          modi quasi suscipit assumenda ea sit debitis aspernatur accusamus
          earum itaque minus?
        </p>
      </div>
    </div>
  );
}

export default CareerDetails;

export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;

  // Simulate delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const res = await fetch(`http://localhost:4000/careers/${id}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch career details for ID ${id}`);
  }

  const jsonData = await res.json();
  return jsonData; // Return the parsed JSON data
};
