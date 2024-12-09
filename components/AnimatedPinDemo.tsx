"use client";
import React from "react";



const projects = [
    {
      title: "EduConnect",
      description: "A platform connecting students with educational opportunities.",
      link: "https://kf-educonnect.netlify.app/",
    },
    {
      title: "Dental Website",
      description: "An interactive website showcasing dental services and care.",
      link: "https://kf-smiley.netlify.app/",
    },
    {
      title: "Campaign Website",
      description: "A dynamic site for promoting and managing campaigns.",
      link: "https://kf-camp.netlify.app/",
    },
    {
      title: "Weather Website",
      description: "A real-time weather tracking application with forecasts.",
      link: "https://kf-weather.netlify.app/",
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
