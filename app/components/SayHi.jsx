"use client";
import { useEffect, useState } from "react";

export default function SayHi() {
  const [off, setOff] = useState(false);

  useEffect(() => {
    const target = document.getElementById("contact");
    if (!target || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([e]) => setOff(e.isIntersecting), { threshold: 0.15 });
    io.observe(target);
    return () => io.disconnect();
  }, []);

  return (
    <a className={"say-hi" + (off ? " off" : "")} href="#contact">
      Say hi
    </a>
  );
}
