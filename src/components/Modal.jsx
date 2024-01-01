import React from "react";
import CreatePetForm from "./CreatePetForm";
import UpdatePetForm from "./UpdatePetForm";

const Modal = ({ closeModal, title, subtitle, type }) => {
  return (
    <div className="overflow-y-auto overflow-x-hidden fixed inset-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] min-h-screen bg-neutral-600/70">
      <div className="relative w-full max-w-2xl max-h-full">
        <div className="relative pb-1 bg-white rounded-lg shadow">
          <div className="p-4 md:p-5 rounded-t mb-4">
            <div className="flex flex-end">
              <button
                onClick={() => closeModal(false)}
                type="button"
                className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600"
                data-modal-hide="authentication-modal">
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
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-lg font-semibold text-primary">{title}</h3>
              <p className="text-sm text-neutral-500">{subtitle}</p>
            </div>
          </div>

          {/* form */}
          <div className="md:px-12">
            {type === "add" ? (
              <CreatePetForm closeModal={closeModal} />
            ) : (
              <UpdatePetForm closeModal={closeModal} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
