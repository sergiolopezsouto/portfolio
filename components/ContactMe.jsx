import { FaRegPaperPlane } from "react-icons/fa";

const ContactMe = () => {
  const contactEmail = "sergio.lopez.souto@gmail.com";

  return (
    <div className="mt-[10rem]  my-10 flex flex-col items-center justify-center w-11/12 md:w-1/2">
      <h2 className="mb-[4rem] text-5xl font-bold tracking-tight text-slate-700 text-center">
        Contact Me
      </h2>
      <p className="text-lg tracking-tight font-normal tracking-normal text-slate-500 text-center">
        I am always open to chat, helping out and open to new projects. Feel
        free to send me a message!
      </p>

      <a
        href={`mailto:${contactEmail}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="flex items-center gap-2 bg-gradient-to-b from-amber-600 to bg-orange-600 bg-slate-80 text-white py-2 px-6 py-3 rounded-xl shadow-xl shadow-amber-600/50 hover:-translate-y-1 mt-8 transition-all">
          <FaRegPaperPlane />
          Email me
        </button>
      </a>
    </div>
  );
};

export default ContactMe;
