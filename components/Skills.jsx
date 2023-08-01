import { SiPython, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiExpress, SiMysql, SiPostgresql, SiMongodb, SiGit } from 'react-icons/si';

const Skills = () => {
  return (
    <div className="my-10">
      <h2 className="mb-8 mt-10 text-5xl font-bold tracking-tight text-slate-700 text-center">Skills</h2>

      <div className="flex justify-center flex-wrap gap-4 mt-10">
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
