"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaSun, FaMoon } from "react-icons/fa";

const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setIsDarkMode(savedTheme === "dark");

    const root = window.document.documentElement;
    if (savedTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);

    const root = window.document.documentElement;
    if (newDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header className="bg-background text-primary py-2 border-b-2 border-accent">
      <div className="max-w-[1280px] mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Kwiaciarnia Wiosenna
        </Link>
        <nav className="flex items-center">
          <ul className="flex space-x-4 mr-4">
            <li>
              <Link href="/" className="hover:text-accent text-sm">
                Strona główna
              </Link>
            </li>
            <li>
              <Link href="/oferta" className="hover:text-accent text-sm">
                Oferta
              </Link>
            </li>
            <li>
              <Link href="/kontakt" className="hover:text-accent text-sm">
                Kontakt
              </Link>
            </li>
          </ul>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-accent text-background hover:bg-primary transition-colors duration-200"
          >
            {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
