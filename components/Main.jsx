import Image from "next/image";
import avatar from "@/assets/avatar.webp"
import Cube from "./Cube";
import { FaGithub, FaLinkedin, FaRegPaperPlane } from 'react-icons/fa';


const Main = () => {

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center mx-10">

        <div className="flex flex-col items-center justify-center">
            <div className="relative mb-10 mt-[5rem] block h-[15rem] w-[15rem] items-center justify-center lg:mt-[5rem] lg:h-[20rem] lg:w-[20rem]">
                <Image
                    src={avatar}
                    className="rounded-[3rem]"
                    alt="avatar"
                    layout="fill"
                />
            </div>

            <div className="flex flex-col items-center justify-center">
                <h1 className="mb-5 bg-gradient-to-r from-blue-400 to-purple-900 bg-clip-text text-5xl md:text-7xl font-bold tracking-tight text-transparent text-center px-5 md:px-10 leading-snug pb-2">
                    Hello, I&apos;m Sergio!
                </h1>

                <h3 className="mb-5 text-center text-[1.6rem] font-light tracking-tight text-center px-5 md:px-10">
                    I am a Full Stack Developer with a passion for coding and problem-solving based in Spain 🇪🇸
                </h3>
            </div>


            {/* <div className="flex gap-4 mt-10">
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
                TODO: change link to the blog
                <a href="mailto:sergio.lopez.souto@gmail.com" target="_blank" rel="noopener noreferrer">
                    <button className="flex items-center gap-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        <FaRegPaperPlane />
                        Email
                    </button>
                </a>
            </div> */}
            
        </div>


        {/* <div className="hidden lg:pt-[5rem] lg:ml-20 lg:block">
            <Cube />
        </div>  */}

    </div>
  );
};

export default Main;
