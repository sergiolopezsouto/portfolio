import Image from "next/image";
import avatar from "@/assets/avatar.webp";
import { FaGithub, FaLinkedin, FaRegPaperPlane } from "react-icons/fa";

const Main = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center mx-10">
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
          <h1 className="mb-5 bg-gradient-to-b from-amber-400 to-orange-600 bg-clip-text text-7xl font-bold tracking-tight text-transparent text-center px-15 leading-snug pb-2">
            Hello, I&apos;m Sergio!
          </h1>

          <h3 className="mb-5 text-center text-[1.6rem] font-light tracking-tight text-center px-10">
            Full Stack Developer based in Spain 🇪🇸
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Main;
