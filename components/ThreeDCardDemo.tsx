"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

// Define the projects array with unique image sources
const projects = [
  {
    title: "EduConnect",
    description: "A platform connecting students with educational opportunities.",
    link: "https://kf-educonnect.netlify.app/",
    image: "/educonnect.png",
  },
  {
    title: "Dental Website",
    description: "An interactive website showcasing dental services and care.",
    link: "https://kf-smiley.netlify.app/",
    image: "/smiley.png",
  },
  {
    title: "Campaign Website",
    description: "A dynamic site for promoting and managing campaigns.",
    link: "https://kf-camp.netlify.app/",
    image: "/camp.png",
  },
  {
    title: "Weather Website",
    description: "A real-time weather tracking application with forecasts.",
    link: "https://kf-weather.netlify.app/",
    image: "/weather.png",
  },
];

export function ThreeDCardDemo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-between ">
      {projects.map((project, index) => (
        <Link href={project.link} key={index}>
          <CardContainer className="inter-var">
            <CardBody className="bg-gradient-to-r from-blue-950 to-blue-600 relative group/card border-black/[0.1] rounded-xl p-6 h-auto border sm:w-80">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-white dark:text-white"
              >
                {project.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-[#f2f2f2]text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {project.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={project.image}
                 
                  className="h-auto w-auto object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={`${project.title} thumbnail`}
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        </Link>
      ))}
    </div>
  );
}
