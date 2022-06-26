import React from "react";
import Banner from "../../Components/Banner";
import CategoryCard from "../../Components/CategoriesCard";
import { useAxios } from "../../Hooks";

const HomePage = () => {
  const { response: categoriesData = [] } = useAxios({
    method: "GET",
    url: "/categories",
  });
  return (
    <>
      <Banner />
      {categoriesData.map((item, index) => {
        return <CategoryCard key={item.id} cardItem={item} index={index} />;
      })}
    </>
  );
};

export default HomePage;
