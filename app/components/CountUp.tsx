"use client";

import { useEffect, useState } from "react";

export default function CountUp() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current += 1;
      setCount(current);

      if (current === 6) {
        clearInterval(interval);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center gap-3">
      <div className="bg-[#397eff] text-white w-[75x] h-[75px] rounded-md flex items-center justify-center font-bold text-6xl p-2">
        {count}+
      </div>

      <p className="text-base md:text-2xl">
        Delivered Projects
      </p>
    </div>
  );
}