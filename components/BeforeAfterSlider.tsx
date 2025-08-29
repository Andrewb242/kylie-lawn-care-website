"use client";

import { useState, useRef, useEffect } from "react";
import { Slider } from "@heroui/slider";

export default function BeforeAfterSlider({
  before,
  after,
}: {
  before: string;
  after: string;
}) {
  const [value, setValue] = useState<number | number[]>(0); // percentage

  return (
    <div>
      <div className="relative w-full h-64 overflow-hidden rounded shadow-md ">
        {/* Before Image */}
        <img
          src={before}
          alt="Before"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* After Image */}
        <div
          className="absolute inset-0 overflow-hidden h-full w-full"
          style={{ clipPath: `inset(0 ${100 - (value as number) * 100}% 0 0)` }}
        >
          <img src={after} alt="After" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Slider */}
      <Slider
        className="w-md mx-auto"
        color="primary"
        defaultValue={0.0}
        hideValue={true}
        maxValue={1}
        minValue={0}
        step={0.01}
        startContent={<span className="text-sm">Before</span>}
        endContent={<span className="text-sm">After</span>}
        onChange={setValue}
      />
    </div>
  );
}
