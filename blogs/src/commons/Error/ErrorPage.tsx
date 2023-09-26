import { Link } from "react-router-dom";
import "./error.css";

export default function ErrorPage() {
  return (
    <div
      id="error-page"
      className="error-page d-flex justify-content-center align-items-center"
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>Not found</p>
      <Link to={"/"} className="under-line">
        Back to home
      </Link>
    </div>
  );
}
