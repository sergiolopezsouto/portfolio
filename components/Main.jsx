import Image from "next/image";
import avatar from "@/assets/avatar.jpg"
import Cube from "./Cube";
import { FaGithub, FaLinkedin } from 'react-icons/fa';


const Main = () => {

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center my-10">

        <div className="flex flex-col items-center justify-center">
            <div className="relative mb-10 mt-[4rem] block h-[14rem] w-[16rem] items-center justify-center lg:mt-[8rem] lg:h-[20rem] lg:w-[22rem]">
                <Image
                    src={avatar}
                    className="rounded-[3rem]"
                    alt="avatar"
                    layout="fill"
                />
            </div>

            <div className="flex flex-col items-center justify-center">
                <h1 className="mb-10 bg-gradient-to-b from-slate-400 to-slate-900 bg-clip-text text-7xl font-bold tracking-tight text-transparent">
                    Hi, I am Sergio!
                </h1>
                <h3 className="text-center text-[1.6rem] font-light tracking-tight">
                    I am a Full Stack Developer with a passion for coding and problem-solving based in Spain.
                </h3>
            </div>

            <div className="flex gap-4 mt-8">
                <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                    <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        <FaLinkedin />
                        LinkedIn
                    </button>
                </a>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <button className="flex items-center gap-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                        <FaGithub />
                        GitHub
                    </button>
                </a>
            </div>
        </div>


        <div className="lg:pt-[8rem] lg:ml-20">
            <Cube />
        </div>

    </div>
  );
};

export default Main;
