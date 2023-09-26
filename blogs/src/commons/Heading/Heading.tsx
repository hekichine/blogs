import React from "react";

const Heading = (props: { heading: string; subheading: string }) => {
  return (
    <>
      <div className="container tophead">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-8 text-center">
            <h2 className="heading">{props.heading}</h2>
            <p className="subheading">{props.subheading}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Heading;
