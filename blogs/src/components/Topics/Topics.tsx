import Heading from "../../commons/Heading/Heading";
import ImgResponsive from "../../service/ImgResponsive";
import Masonry from "react-masonry-css";

import "./topics.css";
import "../../masonry.css";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

const Topics = (props: { topics?: any }) => {
  console.log(props.topics);
  return (
    <>
      <section className="topics">
        <Heading
          heading="Hot topics from Travel Section"
          subheading="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <div className="container">
          <div className="row">
            <div className="col col-12">
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                {props.topics.length > 0 ? (
                  props.topics.map((item: any) => (
                    <div key={item.id}>
                      <ImgResponsive url={item.url} />
                    </div>
                  ))
                ) : (
                  <></>
                )}
              </Masonry>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Topics;
