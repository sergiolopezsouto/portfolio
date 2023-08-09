import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";

const Skills = () => {
  return (
    <div className="my-1 overflow-hidden">
      <div className="flex justify-center flex-wrap gap-4 mt-20 animate-slide mx-0">
        <span className="m-3 inline-block hover:-translate-y-1 transition-all text-gray-500 hover:text-black">
          <SiPython size={30} />
        </span>
        <span className="my-3 mx-1 hover:-translate-y-1 transition-all inline-block text-gray-500 hover:text-blue-400">
          <SiTypescript size={30} />
        </span>
        <span className="my-3 mx-1 hover:-translate-y-1 transition-all inline-block text-gray-500 hover:text-blue-400">
          <SiReact size={30} />
        </span>
        <span className="my-3 mx-1 hover:-translate-y-1 transition-all inline-block text-gray-500 hover:text-black">
          <SiNextdotjs size={30} />
        </span>
        <span className="my-3 mx-1 hover:-translate-y-1 transition-all inline-block text-gray-500 hover:text-blue-400">
          <SiTailwindcss size={30} />
        </span>
        <span className="my-3 mx-1 hover:-translate-y-1 transition-all inline-block text-gray-500 hover:text-black">
          <SiExpress size={30} />
        </span>
        <span className="my-3 mx-1 hover:-translate-y-1 transition-all inline-block text-gray-500 hover:text-blue-400">
          <SiMysql size={30} />
        </span>
        <span className="my-3 mx-1 hover:-translate-y-1 transition-all inline-block text-gray-500 hover:text-blue-400">
          <SiPostgresql size={30} />
        </span>
        <span className="my-3 mx-1 hover:-translate-y-1 transition-all inline-block text-gray-500 hover:text-green-400">
          <SiMongodb size={30} />
        </span>
      </div>
    </div>
  );
};

export default Skills;
