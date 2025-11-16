"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("agentic-theme");
    if (stored === "night") {
      document.body.classList.add("night");
    }
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleToggle = () => {
    document.body.classList.toggle("night");
    const mode = document.body.classList.contains("night") ? "night" : "day";
    window.localStorage.setItem("agentic-theme", mode);
  };

  return (
    <button
      className="fixed right-4 top-4 z-50 rounded-full bg-black/80 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      type="button"
      onClick={handleToggle}
    >
      Toggle Aura
    </button>
  );
}
