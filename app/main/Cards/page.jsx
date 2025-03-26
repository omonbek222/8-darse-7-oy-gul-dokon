import React from "react";
import Card from "./Card";
import axios from "axios";

const token = "64bebc1e2c6d3f056a8c85b7";

const Cards = async () => {
  const res = await axios.get(
    `${process.env.NEXT_API}/flower/category/house-plants?access_token=${token}`
  );
  const data = await res.data.data;
  console.log(data);

  return (
    <div>
      {data?.map((data) => {
        return <Card data={data} />;
      })}
    </div>
  );
};

export default Cards;
