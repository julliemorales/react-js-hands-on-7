import React from "react";
import office1 from "../img/office1.jpg";
import office2 from "../img/office2.jpg";
import office3 from "../img/office3.jpg";
import DisplayDetails from "./DisplayDetails";

const Items = (props) => {
  const rentInfo = [
    {
      name: "Office Space 1",
      rentPrice: 5000,
      address: "Manila",
      src: office1,
    },
    {
      name: "Office Space 2",
      rentPrice: 6000,
      address: "New Delhi",
      src: office2,
    },
    {
      name: "Office Space 3",
      rentPrice: 7000,
      address: "San Francisco",
      src: office3,
    },
  ];
  return (
    <section>
      <h1>Office Space, at Affordable Range</h1>
      {rentInfo.map((e) => (
        <DisplayDetails
          image={e.src}
          name={e.name}
          price={e.rentPrice}
          add={e.address}
        />
      ))}
    </section>
  );
};

export default Items;
