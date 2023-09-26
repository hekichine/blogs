import Heading from "../../commons/Heading/Heading";
import { Masonry } from "react-masonry";

import "./topics.css";

const Topics = () => {
  return (
    <>
      <section className="topics">
        <Heading
          heading="Hot topics from Travel Section"
          subheading="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <div className="container">
          <Masonry className="row row-cols-2 row-cols-md-3 row-cols-xl-4"></Masonry>
        </div>
      </section>
    </>
  );
};

export default Topics;
