import React from "react";
import { useCart } from "../context/CartContext";
import Card from "./Card";

export const Pizzas = ({ searchFood }) => {
  const pizzas = [
    {
      name: "Mozza Tomato",
      url: "./mozzaTomato.jpeg",
      price: 12.99,
      deleted: false,
    },
    {
      name: "Quatre Fromages",
      url: "./4fromages.jpeg",
      price: 13.99,
      deleted: false,
    },
    {
      name: "Cannibale",
      url: "./cannibale.jpeg",
      price: 14.99,
      deleted: false,
    },
    {
      name: "Hawaïenne",
      url: "./hawaienne.jpeg",
      price: 15.99,
      deleted: false,
    },
    {
      name: "Hot Pizza",
      url: "./hotPizza.jpeg",
      price: 13.99,
      deleted: false,
    },
    {
      name: "Pizza Calzone",
      url: "./calzone.jpeg",
      price: 12.99,
      deleted: false,
    },
    {
      name: "Pizza Chèvre-miel",
      url: "./pizza-chevre-miel.jpeg",
      price: 15.99,
      deleted: false,
    },
    {
      name: "Pizza Margherita",
      url: "./pizza-margherita.jpeg",
      price: 11.99,
      deleted: false,
    },
  ];

  const juices = [
    {
      name: "Coca-cola",
      url: "./coca.jpeg",
      price: 3.5,
      deleted: false,
    },
    {
      name: "Iced Tea",
      url: "./ice-tea.jpeg",
      price: 3.2,
      deleted: false,
    },
    {
      name: "Eau Gazeuse",
      url: "./water.jpeg",
      price: 1.5,
      deleted: false,
    },
    {
      name: "Jus d'orange",
      url: "./jus-orange.jpeg",
      price: 2.5,
      deleted: false,
    },
  ];

  const { cartOpened } = useCart();

  return (
    <div
      className={`cards-container grid grid-cols-5 grid-rows-3 px-10 w-9/12 transition-transform duration-100 ease-linear ${
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
              deleted={pizza.deleted}
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
              deleted={juice.deleted}
            />
          );
        })}
    </div>
  );
};

export default Pizzas;
