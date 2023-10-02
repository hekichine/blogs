import { useLoaderData } from "react-router-dom";
import topicsApi from "../../api/topicsApi";
import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Category/Categories";
import Topics from "../../components/Topics/Topics";

const Homepage = () => {
  const topics = useLoaderData();
  return (
    <>
      <Banner />
      <Categories />
      <Topics topics={topics} />
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

export const homeLoader = async () => {
  return await topicsApi.getTopics("");
};
