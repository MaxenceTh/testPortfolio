import { twMerge } from "tailwind-merge";
import React from "react";

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  isRotating = true,
  ...props
}) {
  const calculatedDuration = duration / speed;
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="absolute inset-0 pointer-events-none size-full"
        >
          <circle
            className="stroke-1 stroke-white/10"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}
      {React.Children.map(children, (child, index) => {
        const angle = (360 / React.Children.count(children)) * index;
        return (
          <div
            style={{
              "--duration": calculatedDuration,
              "--radius": radius,
              "--angle": angle,
              "--icon-size": `${iconSize}px`,
              transform: isRotating
                ? undefined
                : `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`
            }}
            className={twMerge(
              `absolute flex size-(--icon-size) transform-gpu  items-center justify-center rounded-full 
              ${reverse ? "[animation-direction:reverse]" : ""}
              ${isRotating ? "animate-orbit" : ""}  
              }`,
              className
            )}
            {...props}
          >
            {child}
          </div>
        );
      })}
    </>
  );
}
