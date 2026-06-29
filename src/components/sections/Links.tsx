import { FaGithub, FaLinkedin } from "react-icons/fa";
// Lucide react removed

export function Links() {
  return (
    <section id="links" className="py-20 md:py-28 px-4 relative z-10 bg-go-blue text-white" style={{ clipPath: "polygon(0 0, 100% 4vw, 100% 100%, 0 calc(100% - 4vw))", marginTop: "-4vw", paddingBottom: "10vw" }}>
      <div className="container mx-auto max-w-5xl text-center py-8">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-10 uppercase drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] text-white">
          Connect With Us
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <a href="https://www.meetup.com/go-aarhus/" target="_blank" rel="noreferrer" className="group flex flex-col items-center justify-center p-6 bg-white text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
            <img src="/meetup.png" alt="Meetup" className="w-12 h-12 md:w-16 md:h-16 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl md:text-2xl font-black uppercase">Meetup</h3>
            <p className="text-sm font-bold mt-2 bg-go-yellow px-2 py-0.5 border-2 border-black">Join our next event</p>
          </a>
          
          <a href="https://github.com/go-aarhus" target="_blank" rel="noreferrer" className="group flex flex-col items-center justify-center p-6 bg-black text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
            <FaGithub className="w-12 h-12 md:w-16 md:h-16 mb-4 group-hover:scale-110 transition-transform text-white" />
            <h3 className="text-xl md:text-2xl font-black uppercase">GitHub</h3>
            <p className="text-sm font-bold mt-2 bg-white text-black px-2 py-0.5 border-2 border-black">Contribute</p>
          </a>

          <a href="https://www.linkedin.com/company/go-aarhus" target="_blank" rel="noreferrer" className="group flex flex-col items-center justify-center p-6 bg-[#0A66C2] text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
            <FaLinkedin className="w-12 h-12 md:w-16 md:h-16 mb-4 group-hover:scale-110 transition-transform text-white" />
            <h3 className="text-xl md:text-2xl font-black uppercase">LinkedIn</h3>
            <p className="text-sm font-bold mt-2 bg-white text-black px-2 py-0.5 border-2 border-black">Follow updates</p>
          </a>
        </div>
      </div>
    </section>
  );
}
