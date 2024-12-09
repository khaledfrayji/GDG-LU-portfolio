"use client";
import React from "react";



const projects = [
    {
      title: "EduConnect",
      description: "A platform connecting students with educational opportunities.",
      link: "https://github.com/khaledfrayji/All-React/tree/main/React%20Projects/EduConnect",
    },
    {
      title: "Dental Website",
      description: "An interactive website showcasing dental services and care.",
      link: "https://github.com/khaledfrayji/All-React/tree/main/React%20Projects/Dental/my-react-app",
    },
    {
      title: "Campaign Website",
      description: "A dynamic site for promoting and managing campaigns.",
      link: "https://github.com/khaledfrayji/Nextjs-camp-frontend",
    },
    {
      title: "Weather Website",
      description: "A real-time weather tracking application with forecasts.",
      link: "https://github.com/khaledfrayji/Next.js-Weather-app-",
    },
  ];
  
export function AnimatedPinDemo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className="h-[25rem] w-full flex items-center justify-center"
        >
        
        </div>
      ))}
    </div>
  );
}
