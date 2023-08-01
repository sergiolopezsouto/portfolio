import Image from "next/image";
import avatar from "@/assets/avatar.jpg"
import Cube from "./Cube";
import { FaGithub, FaLinkedin, FaRegPaperPlane } from 'react-icons/fa';


const Main = () => {

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center my-10 mx-10">

        <div className="flex flex-col items-center justify-center">
            <div className="relative mb-10 mt-[4rem] block h-[15rem] w-[15rem] items-center justify-center lg:mt-[8rem] lg:h-[20rem] lg:w-[20rem]">
                <Image
                    src={avatar}
                    className="rounded-[3rem]"
                    alt="avatar"
                    layout="fill"
                />
            </div>

            <div className="flex flex-col items-center justify-center">
                <h1 className="mb-10 bg-gradient-to-b from-slate-400 to-slate-900 bg-clip-text text-7xl font-bold tracking-tight text-transparent text-center px-15">
                    Hi, I am Sergio!
                </h1>
                {/* <h1 className="mb-8 mt-10 text-5xl font-bold tracking-tight text-slate-700 text-center">Hi, I am Sergio!</h1> */}

                <h3 className="text-center text-[1.6rem] font-light tracking-tight text-center px-10">
                    I am a Full Stack Developer with a passion for coding and problem-solving based in Spain.
                </h3>
            </div>

            <div className="flex gap-4 mt-8">
                <a href="https://www.linkedin.com/in/sergiolopezsouto" target="_blank" rel="noopener noreferrer">
                    <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        <FaLinkedin />
                        LinkedIn
                    </button>
                </a>
                <a href="https://github.com/sergiolopezsouto" target="_blank" rel="noopener noreferrer">
                    <button className="flex items-center gap-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                        <FaGithub />
                        GitHub
                    </button>
                </a>
                <a href="mailto:sergio.lopez.souto@gmail.com" target="_blank" rel="noopener noreferrer">
                    <button className="flex items-center gap-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        <FaRegPaperPlane />
                        Email
                    </button>
                </a>
            </div>
        </div>


        <div className="hidden lg:pt-[5rem] lg:ml-20 lg:block">
            <Cube />
        </div>

    </div>
  );
};

export default Main;
