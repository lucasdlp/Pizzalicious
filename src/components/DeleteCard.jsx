import React from "react";

const DeleteCard = () => {
  return (
    <div className="mr-1">
      <span className="inline-flex items-center justify-center rounded-full bg-red-100  px-2.5 py-0.5 text-red-700">
        <p className="whitespace-nowrap text-sm">Supprimer</p>

        <button className="-me-1 ms-1.5 inline-block rounded-full bg-red-700 p-0.5 text-red-100 transition hover:bg-red-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-3 w-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </span>
    </div>
  );
};

export default DeleteCard;
