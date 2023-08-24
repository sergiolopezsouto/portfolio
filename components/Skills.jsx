'use client'
import React from 'react';
import { SiPython, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiExpress, SiMysql, SiPostgresql, SiMongodb, SiGit } from 'react-icons/si';
// import './Skills.css'; 

const Skills = () => {
  return (
    <div className="my-10 py-10 overflow-hidden">
      <div className="skills-list animate-slide-infinite">
        <span className="m-3 inline-block text-gray-500 hover:text-black">
          <SiPython size={50} />
        </span>
        <span className="m-3 inline-block text-gray-500 hover:text-yellow-400">
          <SiJavascript size={50} />
        </span>
        <span className="m-3 inline-block text-gray-500 hover:text-blue-400">
          <SiTypescript size={50} />
        </span>
        <span className="m-3 inline-block text-gray-500 hover:text-blue-400">
          <SiReact size={50} />
        </span>
        <span className="m-3 inline-block text-gray-500 hover:text-black">
          <SiNextdotjs size={50} />
        </span>
        <span className="m-3 inline-block text-gray-500 hover:text-blue-400">
          <SiTailwindcss size={50} />
        </span>
        <span className="m-3 inline-block text-gray-500 hover:text-green-400">
          <SiNodedotjs size={50} />
        </span>
        <span className="m-3 inline-block text-gray-500 hover:text-black">
          <SiExpress size={50} />
        </span>
        <span className="m-3 inline-block text-gray-500 hover:text-blue-400">
          <SiMysql size={50} />
        </span>
        <span className="m-3 inline-block text-gray-500 hover:text-blue-400">
          <SiPostgresql size={50} />
        </span>
        <span className="m-3 inline-block text-gray-500 hover:text-green-400">
          <SiMongodb size={50} />
        </span>
        <span className="m-3 inline-block text-gray-500 hover:text-red-400">
          <SiGit size={50} />
        </span>
      </div>
    </div>
  );
}

export default Skills;


