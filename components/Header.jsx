import { FaLinkedin, FaGithub, FaRegPaperPlane } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex pt-20 w-screen justify-center bg-gradient-to-b from-slate-200">
      <a
        href="https://www.linkedin.com/in/sergiolopezsouto"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="flex items-center gap-2 hover:text-slate-600 transition-all text-md py-2 mx-5 md:mx-10">
          <FaLinkedin />
          LinkedIn
        </button>
      </a>

      <a
        href="https://github.com/sergiolopezsouto"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="flex items-center gap-2 hover:text-slate-600 transition-all text-md py-2 mx-5 md:mx-10">
          <FaGithub />
          GitHub
        </button>
      </a>

      {/* TODO: change link to the blog  */}
      <a
        href="mailto:sergio.lopez.souto@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="flex items-center gap-2 hover:text-slate-600 transition-all text-md py-2 mx-5 md:mx-10">
          <FaRegPaperPlane />
          Email
        </button>
      </a>
    </div>
  );
};

export default Header;