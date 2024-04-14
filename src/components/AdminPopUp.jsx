import React from "react";
import { useAdminContext } from "../context/AdminContext";
const AdminPopUp = ({ close, setClose }) => {
  const { AdminMod } = useAdminContext();

  const handleClick = () => {
    setClose(true);
  };

  return (
    <div
      role="alert"
      className={
        AdminMod && !close
          ? "block shadow-md rounded-xl border border-gray-100 bg-white p-4 w-2/6 fixed bottom-6 right-2 ease-in-out duration-300 z-50"
          : "shadow-md rounded-xl border border-gray-100 bg-white p-4 w-2/6 fixed bottom-6 right-2 translate-x-[120%] opacity-0 ease-in-out duration-300 z-[-1]"
      }
    >
      <div className="flex items-start gap-4">
        <span className="text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>

        <div className="flex-1">
          <strong className="block font-medium text-gray-900">
            {" "}
            Vous êtes passé en mode ADMINISTRATEUR{" "}
          </strong>

          <p className="mt-1 text-sm text-gray-700">
            Vous pouvez désormais éditer les articles.
          </p>
        </div>

        <button
          onClick={handleClick}
          className="text-gray-500 transition hover:text-gray-600"
        >
          <span className="sr-only">Dismiss popup</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AdminPopUp;
