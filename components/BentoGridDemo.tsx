import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";


export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const items = [
    {
      title: "Coding is My Passion",
      description: "I thrive on solving problems and creating innovative solutions through code.",
      header: <img src="/ide.svg" className="w-full h-full min-h-[6rem]" />,
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Tech Explorer",
      description: "In my free time, I dive into new technologies and broaden my horizons.",
      header: <img src="/skeleton.svg" className="w-full h-full min-h-[6rem]" />,
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "My Thoughts on AI",
      description: "I believe AI holds the potential to reshape our world and drive future innovation.",
      header: <img src="/ai.gif" className="w-full h-full min-h-[6rem]" />,
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "React Enthusiast",
      description: "As a React developer, I enjoy building dynamic, user-centric web applications.",
      header: <img src="/dev1.svg" className="w-full h-full min-h-[6rem]" />,
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Computer Science Student",
      description: "Currently in my third year at the Lebanese University, pursuing my passion for technology.",
      header: <img src="/dev4.svg" className="w-full h-full min-h-[6rem]" />,
      icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Dreaming Big",
      description: "My goals include mastering advanced development techniques and contributing to impactful projects.",
      header: <img src="/dev2.svg" className="w-full h-full min-h-[6rem]" />,
      icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Soft Skills Advocate",
      description: "I value effective communication, teamwork, and adaptability as keys to success.",
      header: <img src="/dev3.svg" className="w-full h-full min-h-[6rem]" />,
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
  ];
  
