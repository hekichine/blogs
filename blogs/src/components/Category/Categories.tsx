// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "./categories.css";
import { Link } from "react-router-dom";
import Heading from "../../commons/Heading/Heading";

const Categories = () => {
  return (
    <>
      <section className="categories">
        <Heading
          heading="Latest News from all categories"
          subheading="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <div className="cate-slider">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <Swiper
                  spaceBetween={30}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    1024: {
                      slidesPerView: 3,
                    },
                  }}
                >
                  <SwiperSlide>
                    <div className="slider-inner">
                      <div className="img">
                        <Link className="full-width-link" to={"/"} />
                        <img src="/images/parallax.webp" alt="" />
                      </div>
                      <p className="date">10 Jan 2018</p>
                      <Link to={"/"}>
                        It S Hurricane Season Visiting Hilton
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slider-inner">
                      <div className="img">
                        <Link className="full-width-link" to={"/"} />
                        <img src="/images/parallax.webp" alt="" />
                      </div>
                      <p className="date">10 Jan 2018</p>
                      <Link to={"/"}>
                        It S Hurricane Season Visiting Hilton
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slider-inner">
                      <div className="img">
                        <Link className="full-width-link" to={"/"} />
                        <img src="/images/parallax.webp" alt="" />
                      </div>
                      <p className="date">10 Jan 2018</p>
                      <Link to={"/"}>
                        It S Hurricane Season Visiting Hilton
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slider-inner">
                      <div className="img">
                        <img src="/images/parallax.webp" alt="" />
                        <Link className="full-width-link" to={"/"} />
                      </div>
                      <p className="date">10 Jan 2018</p>
                      <Link to={"/"}>
                        It S Hurricane Season Visiting Hilton
                      </Link>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
