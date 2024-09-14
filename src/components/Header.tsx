"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Header() {
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
    <header className="bg-background text-primary px-4 md:px-0 py-4 border-b-2 border-accent">
      <div className="max-w-[1280px] mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Kwiaciarnia Wiosenna
        </Link>
        <div className="flex items-center justify-center">
          <nav className="items-center justify-center hidden md:flex">
            <ul className="flex items-center justify-center space-x-6 mr-6">
              <li className="m-0">
                <Link
                  href="/"
                  className="hover:text-accent text-base flex items-center"
                >
                  Strona główna
                </Link>
              </li>
              <li className="m-0">
                <Link
                  href="/oferta"
                  className="hover:text-accent text-base flex items-center"
                >
                  Oferta
                </Link>
              </li>
              <li className="m-0">
                <Link
                  href="/kontakt"
                  className="hover:text-accent text-base flex items-center"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </nav>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-accent text-background hover:bg-primary transition-colors duration-200"
          >
            {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
}
