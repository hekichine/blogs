import Heading from "../../commons/Heading/Heading";
import ImgResponsive from "../../service/ImgResponsive";
import Masonry from "react-masonry-css";

import "./topics.css";
import "../../masonry.css";

const images = [
  {
    id: 1,
    url: "https://accelerated.atoms.crystallize.digital/snowball/images/PalmaSpeedJusterteBilder-15/_resized_3200.jpg",
  },
  {
    id: 2,
    url: "https://cdn.shopify.com/s/files/1/0820/6975/0064/files/collection4.jpg?v=1695958709",
  },
  {
    id: 3,
    url: "https://vapa.vn/wp-content/uploads/2022/12/anh-3d-thien-nhien.jpeg",
  },
];
const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};
const Topics = () => {
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
                <div style={{ height: 300 }}>My Element</div>
                <div style={{ height: 320 }}>My Element</div>
                <div style={{ height: 165 }}>My Element</div>
                <div style={{ height: 125 }}>My Element</div>
                <div style={{ height: 125 }}>My Element</div>
                <div style={{ height: 320 }}>My Element</div>
                <div style={{ height: 300 }}>My Element</div>
                <div style={{ height: 165 }}>My Element</div>
                <div style={{ height: 300 }}>My Element</div>
                <div style={{ height: 320 }}>My Element</div>
                <div style={{ height: 125 }}>My Element</div>
                <div style={{ height: 165 }}>My Element</div>
                <div style={{ height: 300 }}>My Element</div>
                <div style={{ height: 320 }}>My Element</div>
                <div style={{ height: 165 }}>My Element</div>
                <div style={{ height: 125 }}>My Element</div>
              </Masonry>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Topics;
