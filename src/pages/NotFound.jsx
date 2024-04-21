import { Link } from "react-router-dom"; // If you're using React Router for navigation

import NotFoundSVG from "../assets/404-svg-animation.svg"; // Import the SVG file

const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Oops!</h1>
      <p style={styles.message}>The page you are looking for does not exist.</p>
      <Link to="/" style={styles.link}>
        Go back to home page
      </Link>
      <object
        type="image/svg+xml"
        data={NotFoundSVG}
        style={styles.svg}
      ></object>
    </div>
  );
};

const styles = {
  container: {
    position: "relative",
    textAlign: "center",
    height: "70vh",
    padding: "20px 0",
    borderRadius: "10px",
    // background: "linear-gradient(135deg, #262626, #1e1e1e)", // Dark background using CSS gradient
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)", // Adding a shadow effect for better visibility
  },
  title: {
    fontSize: "48px",
    marginBottom: "20px",
    marginTop: "0",
  },
  message: {
    fontSize: "20px",
    marginBottom: "20px",
  },
  link: {
    position: "absolute",
    bottom: "100px",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "16px",
    color: "#007bff", // Bootstrap blue color
    textDecoration: "none",
  },
  svg: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
};

export default NotFoundPage;
