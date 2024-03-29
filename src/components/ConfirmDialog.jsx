import React from "react";
import { useDispatch } from "react-redux";
import { deletePet } from "../store/actions";

const ConfirmDialog = ({ closeConfirmDialog, idToDelete }) => {
  const dispatch = useDispatch();

  const handleDeletePet = () => {
    dispatch(deletePet(idToDelete));
    closeConfirmDialog(false);
  };
  return (
    <div className="overflow-y-auto overflow-x-hidden fixed inset-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] min-h-screen bg-neutral-600/70">
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow">
          <button
            type="button"
            onClick={() => closeConfirmDialog(false)}
            className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center">
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-4 md:p-5 text-center">
            {/* <svg
              className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg> */}
            <h2 className="mb-1 text-xl font-bold text-gray-900 text-left mt-6">
              Confirmation
            </h2>
            <h3 className="mb-5 text-sm font-normal text-gray-500 text-left">
              Are you sure you want to delete this patient?
            </h3>
            <div className="mt-7">
              <button
                type="button"
                onClick={handleDeletePet}
                className="text-white bg-red-600 hover:bg-red-800 focus:outline-none font-medium rounded text-xs inline-flex items-center px-5 py-2.5 text-center me-2">
                Yes, I'm sure
              </button>
              <button
                onClick={() => closeConfirmDialog(false)}
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:outline-none rounded border border-gray-200 text-xs font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">
                No, cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
