import Image from "next/image";

import { BsArrowRight } from "react-icons/bs";

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
          <button className="flex text-sm  items-center gap-1 py-2 border border-slate-800 hover:bg-slate-800 hover:text-white py-1 px-2 rounded-lg transition duration-200 ease-in-out">
            Check it out
          </button>
        </a>
        <a href={props.codeLink} target="_blank" rel="noopener noreferrer">
          <button className="flex text-sm items-center gap-1 py-1 px-2 rounded-lg transition duration-200 ease-in-out">
            Code <BsArrowRight />
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
