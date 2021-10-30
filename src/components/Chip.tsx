import React from "react";
import Technology from "../models/techs";

const Chip = ({ item }: { item: Technology }) => {
  return (
    <a href={item.link}>
      <div className="bg-portfolio-headers flex items-center py-3 px-4 mx-4 my-2 rounded-3xl shadow-xl">
        <div className="bg-white p-2 rounded-full">
          <img
            height="30"
            width="30"
            className="m-auto"
            src={"/img/icons/" + item.logo}
            alt={item.name}
          />
        </div>
        <div className="ml-2">
          <h2 className="font-bold text-white text-xl">{item.name}</h2>
        </div>
      </div>
    </a>
  );
};

export default Chip;
