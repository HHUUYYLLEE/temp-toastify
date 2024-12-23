"use client";

import Image from "next/image";
import { toast } from "react-toastify";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <button
        className="bg-emerald-600 hover:bg-green-800 px-4 py-2 rounded-lg text-white"
        onClick={() => toast.success("button toast.")}
      >
        Toast
      </button>
    </div>
  );
}
