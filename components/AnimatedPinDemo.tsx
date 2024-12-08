"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";


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
          <PinContainer title={project.link} href={project.link}>
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                {project.title}
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500">{project.description}</span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
            </div>
          </PinContainer>
        </div>
      ))}
    </div>
  );
}
