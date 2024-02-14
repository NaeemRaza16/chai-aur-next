'use client'
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  let [counterValue, setCounterValue] = useState(5)

  const addCounter = () => {
    if (counterValue < 20) {
      setCounterValue(counterValue + 1)
    }else {
      alert("Value of counter never increase by 20")
    }
  }
  const subtCounter = () => {
    if (counterValue > 0) {
      setCounterValue(counterValue - 1)
    }else {
      alert("Value of counter never decrese by 0")
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Next JS Counter App</h1>

      <h2>Counter value: {counterValue}</h2>

      <div>
        <button
        onClick={addCounter}
        >Add</button> <br />
        <button
        onClick={subtCounter}
        >Subtract</button>
      </div>
    </main>
  );
}
