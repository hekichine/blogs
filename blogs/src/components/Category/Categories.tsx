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
                  {cates ? (
                    cates.map((cate) => (
                      <SwiperSlide key={cate.id}>
                        <div className="slider-inner">
                          <div className="img">
                            <Link
                              className="full-width-link"
                              to={cate.url}
                              target="_blank"
                            />
                            <img src={cate.image_url} alt={cate.alt} />
                          </div>
                          <p className="date">{cate.date}</p>
                          <Link to={cate.url} target="_blank">
                            {cate.title}
                          </Link>
                        </div>
                      </SwiperSlide>
                    ))
                  ) : (
                    <SwiperSlide>
                      <div className="slider inner">Data not fetch</div>
                    </SwiperSlide>
                  )}
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

const cates = [
  {
    id: 1,
    image_url:
      "https://visana.vn/wp-content/uploads/2019/06/Du-lich-Thuy-Sy-8.jpg",
    url: "https://visana.vn/wp-content/uploads/2019/06/Du-lich-Thuy-Sy-8.jpg",
    alt: "Travel Thuy Sy",
    date: "29 September 2023",
    title: "Travel to Thuy Sy, it is very well",
  },
  {
    id: 2,
    image_url:
      "https://eutrip.vn/view/admin/Themes/kcfinder/upload/images/dia-diem-du-lich-thuy-si-12.jpg",
    url: "https://eutrip.vn/view/admin/Themes/kcfinder/upload/images/dia-diem-du-lich-thuy-si-12.jpg",
    alt: "Japan tourist",
    date: "12 April 2023",
    title: "Japan tourist",
  },
  {
    id: 3,
    image_url:
      "https://cdn.tgdd.vn/Files/2022/03/23/1421982/kinh-nghiem-du-lich-pho-co-ha-noi-trong-1-ngay-day-du-nhat-202203232355407527.jpg",
    url: "https://cdn.tgdd.vn/Files/2022/03/23/1421982/kinh-nghiem-du-lich-pho-co-ha-noi-trong-1-ngay-day-du-nhat-202203232355407527.jpg",
    alt: "Hoan Kiem Lake",
    date: "01 January s2024",
    title: "Hoan Kiem Lake",
  },
  {
    id: 4,
    image_url:
      "https://media.thuonghieucongluan.vn/uploads/2021/10/19/tp-ve-dem-1634631228.jpg",
    url: "https://media.thuonghieucongluan.vn/uploads/2021/10/19/tp-ve-dem-1634631228.jpg",
    alt: "Kỷ niệm 59 năm Ngày thành lập TP. Thái Nguyên: Xây dựng đô thị phát triển thông minh, hiện đại",
    date: "19 October 2021",
    title:
      "Kỷ niệm 59 năm Ngày thành lập TP. Thái Nguyên: Xây dựng đô thị phát triển thông minh, hiện đại",
  },
];
