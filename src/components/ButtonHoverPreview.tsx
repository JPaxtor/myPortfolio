"use client";
import { HoverBorderGradient } from "../components/ui/ButtonHover";

export function HoverBorderGradientDemo() {
  return (
    <div className="flex justify-center text-center p-10">
      <a href="https://docs.google.com/document/d/1Q__uEjgDd0Azop8ob4hVRJBUiBjfW0NjgK1B0E8ezUA/edit?usp=sharing">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
        >
          <span>My portfolio</span>
        </HoverBorderGradient>
      </a>
    </div>
  );
}
