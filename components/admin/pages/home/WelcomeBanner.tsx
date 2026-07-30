"use client";

import { useEffect, useState } from "react";

const TEXT = "Bine ai venit, Admin!";

export function WelcomeBanner() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="w-full pt-50 sm:pt-100 justify-center text-center">
      <h1 className="font-display text-3xl sm:text-7xl text-ink text-center">
        {TEXT.split("").map((char, index) => (
          <span
            key={index}
            className="inline-block transition-all duration-300 ease-out"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateX(0)" : "translateX(-12px)",
              transitionDelay: `${index * 35}ms`,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
    </div>
  );
}