"use client";

import { useState, useRef, useEffect } from "react";

export default function BeforeAfterSlider({
  before,
  after,
}: {
  before: string;
  after: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPos, setSliderPos] = useState(50); // percentage

  const handleDrag = (e: MouseEvent | TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    let pos = ((clientX - rect.left) / rect.width) * 100;
    pos = Math.max(0, Math.min(100, pos));
    setSliderPos(pos);
  };

  const startDrag = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    window.addEventListener("mousemove", handleDrag as any);
    window.addEventListener("touchmove", handleDrag as any);
    window.addEventListener(
      "mouseup",
      () => {
        window.removeEventListener("mousemove", handleDrag as any);
        window.removeEventListener("touchmove", handleDrag as any);
      },
      { once: true }
    );
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-64 overflow-hidden rounded shadow-md cursor-pointer"
      onMouseDown={startDrag}
      onTouchStart={startDrag}
    >
      {/* Before Image */}
      <img
        src={before}
        alt="Before"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* After Image */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <img src={after} alt="After" className="w-full h-full object-cover" />
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-blue-500 opacity-70"
        style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
      />
    </div>
  );
}
