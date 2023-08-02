import Image from 'next/image';
import { FaPlay, FaCode } from 'react-icons/fa';


const ProjectCard = (props) => {
  return (
    <div className="rounded-lg border bg-white shadow-md transition-all hover:-translate-y-1">
        <Image
          className="rounded-t-lg"
          src={props.image}
          alt="project preview image"
          layout="responsive"
          width={525}
          height={320}
        />

        <div className="p-4">
          <h5 className="text-gray-90 text-xl font-medium tracking-tight text-slate-600">
            {props.title}
          </h5>
          <p className="text-gray-600 text-md mt-2">{props.description}</p>
        </div>

        <div className="flex justify-between items-center p-4">
            <a href={props.demoLink} target="_blank" rel="noopener noreferrer">
                <button className="flex items-center gap-1 bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded transition duration-300 ease-in-out">
                    <FaPlay /> Demo
                </button>
            </a>
            <a href={props.codeLink} target="_blank" rel="noopener noreferrer">
                <button className="flex items-center gap-1 bg-gray-500 hover:bg-gray-700 text-white py-1 px-2 rounded transition duration-300 ease-in-out">
                    <FaCode /> Code
                </button>
            </a>
        </div>
    </div>
  );
}

export default ProjectCard;
