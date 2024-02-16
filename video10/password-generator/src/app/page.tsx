'use client'
import { useState, useCallback, useEffect, useRef } from "react";

export default function Home() {

  const [password, setPassword] = useState("")
  const [length, setLength] = useState(8);
  const [isNumAllowed, setIsNumAllowed] = useState(false)
  const [isCharAllowed, setIsCharAllowed] = useState(false)
  const passReference = useRef<HTMLInputElement>(null)

  const copyPasswordToClipboard = useCallback(() => {
    passReference.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password])

  const generatorPassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (isNumAllowed) str += "0123456789"
    if (isCharAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, isNumAllowed, isCharAllowed, setPassword])

  useEffect(() => {
    generatorPassword()
  }, [length, isNumAllowed, isCharAllowed, generatorPassword])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">

      <h1 className='text-white text-center my-3 text-3xl'>Password generator</h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passReference}
        />
        <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >
          Copy
        </button>
      </div>

      <div className='flex text-sm gap-x-2'>

        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => { setLength(parseInt(e.target.value)) }}
          />
          <label>Length: {length}</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={isNumAllowed}
            id="numberInput"
            onChange={() => setIsNumAllowed((prev) => !prev)}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={isCharAllowed}
            id="characterInput"
            onChange={() => setIsCharAllowed((prev) => !prev)}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>

      </div>
    </div>
  );
}
