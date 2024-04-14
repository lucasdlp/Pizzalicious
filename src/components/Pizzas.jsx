import React from "react";
import { useCart } from "../context/CartContext";
import Card from "./Card";

const Pizzas = ({ searchFood }) => {
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

  const juices = [
    {
      name: "Coca-cola",
      url: "./coca.jpeg",
      price: 3.5,
    },
    {
      name: "Iced Tea",
      url: "./ice-tea.jpeg",
      price: 3.2,
    },
    {
      name: "Eau Gazeuse",
      url: "./water.jpeg",
      price: 1.5,
    },
  ];

  const { cartOpened } = useCart();

  return (
    <div
      className={`grid grid-cols-4 grid-rows-3 px-10 w-9/12  m-auto transition-transform duration-100 ease-linear ${
        cartOpened ? " translate-x-[-12%]" : ""
      }`}
    >
      {pizzas
        .filter((pizza) =>
          pizza.name.toLowerCase().includes(searchFood.toLowerCase())
        )
        .map((pizza, index) => {
          return (
            <Card
              key={index}
              name={pizza.name}
              url={pizza.url}
              price={pizza.price}
            />
          );
        })}
      {juices
        .filter((juice) =>
          juice.name.toLowerCase().includes(searchFood.toLowerCase())
        )
        .map((juice, index) => {
          return (
            <Card
              key={index}
              name={juice.name}
              url={juice.url}
              price={juice.price}
            />
          );
        })}
    </div>
  );
};

export default Pizzas;
