"use client";
import { useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  function toggle() {
    const next = !dark;
    setDark(next);
    const root = document.documentElement;
    if (next) root.setAttribute("data-mode", "dark");
    else root.removeAttribute("data-mode");
  }

  return (
    <button id="mode" type="button" aria-pressed={dark} onClick={toggle}>
      {dark ? "Light" : "Dark"}
    </button>
  );
}
