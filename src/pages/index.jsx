import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <input
        type="text"
        name={name}
        className="text-black"
        onChange={(e) => setName(e.target.value)}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 mt-2 rounded"
        onClick={() => router.push(`/product/${name}`)}
      >
        Open Product
      </button>
    </div>
  );
}
