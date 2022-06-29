import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import ImageSlider from "../common/imageSlider/ImageSlider";
import Card from "../common/card/Card";
import { useAxios } from "../../Hooks";

const Home = () => {
  const navigate = useNavigate();
  const { response: categories = [] } = useAxios({ url: "/categories" });

  const sortByKey = (array, key) => {
    return array.sort((a, b) => {
      let x = a[key];
      let y = b[key];
      return x < y ? -1 : x > y ? 1 : 0;
    });
  };

  const handleClick = () => {
    navigate("/products");
  };

  return Array.isArray(categories) ? (
    categories.length > 0 && (
      <section className="homeContainer">
        <ImageSlider />
        {sortByKey(categories, "order").map(
          (item) =>
            item.order > 0 &&
            item.enabled && (
              <Card
                key={item.id}
                src={require(`../../${item.imageUrl}`)}
                buttonText={item.key}
                title={item.name}
                description={item.description}
                order={item.order}
                handleClick={handleClick}
              />
            )
        )}
      </section>
    )
  ) : (
    <div>Loading...</div>
  );
};

export default Home;
