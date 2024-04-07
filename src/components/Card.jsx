import React from "react";

const Card = ({ name, url, price }) => {
  return (
    <div className="card w-56 h-72 bg-white border-[1px] border-gray-200 mb-6 rounded-xl">
      <img
        src={url}
        alt={name}
        className="rounded-xl border-b-1 border-gray-100 w-full"
      />
      <h3>{name}</h3>
      <span className="inline-flex items-center justify-center rounded-full  bg-amber-100 px-2.5 py-0.5 text-amber-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="-ms-1 me-1.5 h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <p className="whitespace-nowrap text-sm">{price}</p>
      </span>
    </div>
  );
};

export default Card;
