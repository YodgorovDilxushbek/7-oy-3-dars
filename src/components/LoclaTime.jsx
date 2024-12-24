import React, { useState, useEffect } from "react";

const LocalTime = () => {
  const [time, setTime] = useState("");
  const [selectedCity, setSelectedCity] = useState("Tashkent");

  const cities = {
    Tashkent: "Asia/Tashkent",
    London: "Europe/London",
    Tokyo: "Asia/Tokyo",
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString("en-US", {
        timeZone: cities[selectedCity],
      });
      setTime(currentTime);
    }, 1000);
    return () => clearInterval(interval);
  }, [selectedCity]);

  return (
    <div>
      <select
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
        className="mb-4 p-2 border text-black border-gray-300 rounded "
      >
        {Object.keys(cities).map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      <p className="text-xl flex items-center  font-mono text-white bg-gray-800 p-6 rounded-lg shadow-l">Mahalliy vaqt: {time}</p>
    </div>
  );
};

export default LocalTime;
