import React from "react";
import Card from "./Card";

const Pizzas = () => {
  const pizzas = [
    {
      name: "Mozza Tomato",
      url: "./mozzaTomato.jpeg",
      price: 12.99,
    },
    {
      name: "Quatre Fromages",
      url: "./4fromages.jpeg",
      price: 13.99,
    },
    {
      name: "Cannibale",
      url: "./cannibale.jpeg",
      price: 14.99,
    },
    {
      name: "Hawaïenne",
      url: "./hawaienne.jpeg",
      price: 15.99,
    },
    {
      name: "Hot Pizza",
      url: "./hotPizza.jpeg",
      price: 13.99,
    },
  ];

  return (
    <div className="grid grid-cols-4 grid-rows-3 px-10 w-9/12  m-auto">
      {pizzas.map((pizza, index) => {
        return (
          <Card
            key={index}
            name={pizza.name}
            url={pizza.url}
            price={pizza.price}
          />
        );
      })}
    </div>
  );
};

export default Pizzas;
