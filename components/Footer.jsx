import { SiNextdotjs, SiTailwindcss, SiVercel } from "react-icons/si";


const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <div className="flex w-screen py-[5rem] flex w-screen flex-col items-center bg-gradient-to-t from-slate-200 py-[2rem] text-slate-400">

      <div className="flex w-11/12 flex-row items-center justify-center">
        <span className="mr-1 inline-block">Built using</span>
        <span className="m-1 inline-block">
          <SiNextdotjs size={20} className="hover:text-black" />
        </span>
        <span className="m-1 inline-block">
          <SiTailwindcss size={25} className="hover:text-blue-400" />
        </span>
        <span className="m-1 inline-block">
          <SiVercel size={20} className="hover:text-black"/>
        </span>
      </div>

      <p className="mt-4 w-11/12 text-center">
          © Copyright {year} {" "}
          <a href="https://github.com/sergiolopezsouto" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">
          Sergio Lopez Souto
          </a>
          {" "} ~ All rights reserved.
      </p>

    </div>
  )
}

export default Footer