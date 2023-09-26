import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Category/Categories";
import Topics from "../../components/Topics/Topics";

const Homepage = () => {
  return (
    <>
      <Banner />
      <Categories />
      <Topics />
    </>
  );
};
// Struct
// Banner
// Latest new categories
// Hot topics
// Fashion news (posts)
// Blog about team
// News (ex: 1 team vua moi chinh phuc duoc dinh phanxipang vao hom qua)

export default Homepage;

export const homeLoader = () => {
  return {
    cate: {
      id: 1,
      name: "cate 1",
    },
    banner: {
      id: 1,
      url: "banner",
    },
    topics: {
      id: 123,
      name: "asldjsal",
    },
  };
};
