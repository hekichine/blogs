import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-main text-center">
        <p>
          &copy; 2023 All Rights Reserved. Design by{" "}
          <Link to={"/about"}>Stacky</Link>
        </p>
      </div>
    </>
  );
};

export default Footer;
