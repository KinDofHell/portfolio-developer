import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  href: string;
}

const ProjectCard = ({ src, title, description, href }: Props) => {
  return (
    <a
      href={href}
      target="_blank"
      className="block relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]"
    >
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
