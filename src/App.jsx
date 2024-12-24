import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import Clock from "./components/Clock.jsx";
import LocalTime from "./components/LoclaTime.jsx";
import Timer from "./components/Timer.jsx";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <header className="bg-white text-gray-800 py-4 shadow-md">
          <nav className="flex justify-center space-x-6">
            <NavLink
              to="/clock"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-bold border-b-2 border-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }
            >
              Soat
            </NavLink>
            <NavLink
              to="/localtime"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-bold border-b-2 border-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }
            >
              Mahalliy Vaqt
            </NavLink>
            <NavLink
              to="/timer"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-bold border-b-2 border-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }
            >
              Taymer
            </NavLink>
          </nav>
        </header>

        <main className="flex items-center justify-center p-6">
          <div className="w-full max-w-6xl">
            <Routes>
              <Route path="/clock" element={<Clock />} />
              <Route path="/localtime" element={<LocalTime />} />
              <Route path="/timer" element={<Timer />} />
              <Route
                path="*"
                element={<h1 className="text-center text-2xl">Kerakli menyuga o'ting</h1>}
              />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
