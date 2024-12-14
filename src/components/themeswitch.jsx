import React, { useState, useEffect } from "react";
import useStore from "../store"; // Ensure this is imported correctly

const ThemeSwitch = () => {
  const { theme, setTheme } = useStore((state) => state); // Access global state
  const [isDarkMode, setIsDarkMode] = useState(theme === "dark");

  // Sync local state with global state
  useEffect(() => {
    setIsDarkMode(theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode); // Update local state
    setTheme(newTheme); // Update global state
    localStorage.setItem("theme", newTheme); // Persist theme in local storage
  };

  return (
    <div
      className={`w-16 h-8 flex items-center rounded-full cursor-pointer transition-colors duration-300 ${
        isDarkMode ? "bg-gray-800" : "bg-gray-200"
      }`}
      onClick={toggleTheme}
    >
      <div
        className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
          isDarkMode ? "translate-x-8" : "translate-x-0"
        }`}
      ></div>
    </div>
  );
};

export default ThemeSwitch;
