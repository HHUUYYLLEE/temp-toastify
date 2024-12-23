"use client";
import { ToastContainer } from "react-toastify";
import { contextClass } from "src/constants/toastify";
// const contextClass = {
//   success: "bg-gradient-to-r from-yellow-300 to-orange-300",
//   error: "bg-gradient-to-r from-yellow-300 to-orange-300",
//   info: "bg-gradient-to-r from-yellow-300 to-orange-300",
//   warning: "bg-gradient-to-r from-yellow-300 to-orange-300",
//   default: "bg-gradient-to-r from-yellow-300 to-orange-300",
// };

export const Toast = () => {
  return (
    <>
      <ToastContainer
        toastClassName={(context) => {
          return (
            contextClass[context?.type || "default"] +
            ` pl-3 pr-1 py-1 min-h-[10vh] min-w-[20vw]
          rounded-md text-sm flex items-center text-white
           cursor-pointer overflow-x-hidden mb-2`
          );
        }}
        // toastClassName="toast pl-3 pr-1 py-1 min-h-[10vh] min-w-[20vw]
        //   rounded-md text-sm flex items-center text-white
        //    cursor-pointer overflow-x-hidden mb-2"
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={true}
      />
    </>
  );
};
