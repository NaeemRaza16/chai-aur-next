'use client'
import { useState } from "react";

export default function Home() {

  const [color, setColor] = useState("Olive")

  const colors = ["Red", "Green", "Blue", "Orange", "Purple", "Black", "Pink", "Gray"]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"
      style={{ backgroundColor: color, transition: "background-color 0.10s ease" }}
    >

      <div className="text-black flex gap-3 py-4 px-4 rounded-3xl fixed bottom-10 bg-white">

        {
          colors.map((color, index) => (
            <button
            key={index}
            onClick={() => setColor(color)}
            className="bg-red-500 text-white py-2 px-4 rounded-2xl"
            style={{backgroundColor: color, transition: "background-color 0.10s ease"}}
            >
              {color}
            </button>
          ))
        }

      </div>
    </main>
  );
}
