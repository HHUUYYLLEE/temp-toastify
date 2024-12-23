"use client";
import { toast } from "react-toastify";
export const Button = () => {
  return (
    <button
      className="bg-emerald-600 hover:bg-green-800 px-4 py-2 rounded-lg text-white"
      onClick={() => toast.success("button toast.")}
    >
      Toast
    </button>
  );
};
