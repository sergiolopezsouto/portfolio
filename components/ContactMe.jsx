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

      <a href={`mailto:${contactEmail}`}>
        <button
          className="mt-8 rounded-md bg-slate-900 p-3 font-medium text-white shadow-md shadow-slate-800/50 transition-all hover:-translate-y-1 hover:bg-slate-800 text-center"
          aria-label="Contact me button"
        >
          Email me
        </button>
      </a>
    </div>  
  )
}

export default ContactMe
