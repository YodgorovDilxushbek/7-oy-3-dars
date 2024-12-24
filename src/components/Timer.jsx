
import React, { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(0); // Kirilgan vaqt
  const [remainingTime, setRemainingTime] = useState(0); // Qolgan vaqt
  const [isActive, setIsActive] = useState(false); // Taymer faolligini boshqarish
  const [message, setMessage] = useState(""); // Xabar

  useEffect(() => {
    let timer;
    if (isActive && remainingTime > 0) {
      timer = setInterval(() => {
        setRemainingTime((prev) => prev - 1);
      }, 1000);
    } else if (remainingTime === 0 && isActive) {
      setIsActive(false);
      setMessage("Vaqt tugadi!");
    }
    return () => clearInterval(timer); // Tozalash
  }, [isActive, remainingTime]);

  const handleStart = () => {
    if (time > 0) {
      setRemainingTime(time);
      setIsActive(true);
      setMessage("");
    } else {
      setMessage("Iltimos, to'g'ri vaqt kiriting!");
    }
  };

  const handleReset = () => {
    setTime(0);
    setRemainingTime(0);
    setIsActive(false);
    setMessage("");
  };

  return (
    <div className="flex flex-col items-center justify-center   text-white">
      <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg">
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(Number(e.target.value))}
          placeholder="Sekundlarni kiriting"
          className="p-2 rounded border border-gray-700 text-gray-900 focus:outline-none focus:ring focus:ring-blue-500 mb-4"
        />
        <div className="flex space-x-4">
          <button
            onClick={handleStart}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Boshlash
          </button>
          <button
            onClick={handleReset}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            Reset
          </button>
        </div>
        <div className="mt-6 text-2xl font-mono">
          {remainingTime > 0 ? `${remainingTime} sekund` : message}
        </div>
      </div>
    </div>
  );
}

export default Timer;

