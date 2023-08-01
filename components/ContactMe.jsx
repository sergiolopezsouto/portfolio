import { FaRegPaperPlane } from 'react-icons/fa';

const ContactMe = () => {

  const contactEmail = "sergio.lopez.souto@gmail.com"

  return (
    <div className="my-10 flex flex-col items-center justify-center w-11/12 md:w-1/2">
        <h2 className="mb-8 mt-10 text-5xl font-bold tracking-tight text-slate-700 text-center">
        Contact Me
        </h2>
        <p className="text-xl font-normal tracking-normal text-slate-600 text-center">
            I am always open to chat, helping out and open to new projects. Feel free to send me a message!
        </p>

      <a href={`mailto:${contactEmail}`} target="_blank" rel="noopener noreferrer">
        <button className="flex items-center gap-2 bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded mt-8">
          <FaRegPaperPlane />
          Send me an Email
        </button>
      </a>
    </div>  
  )
}

export default ContactMe
