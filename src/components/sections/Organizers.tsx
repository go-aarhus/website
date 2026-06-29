import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { organizers } from "../../data/organizers";

export function Organizers() {
  return (
    <section id="organizers" className="py-20 md:py-28 px-4 bg-background" style={{ clipPath: "polygon(0 0, 100% 4vw, 100% 100%, 0 100%)", marginTop: "-4vw" }}>
      <div className="container mx-auto max-w-5xl text-center py-8">
        <div className="inline-block bg-go-blue border-2 border-black text-white px-4 py-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rotate-1 hover:rotate-0 transition-transform mb-6">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase">Meet the Team</h2>
        </div>
        <p className="text-lg md:text-xl font-bold text-black mb-12 max-w-2xl mx-auto bg-white border-2 border-black p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] -rotate-1">
          We are passionate Go developers dedicated to building a strong, inclusive local community in Aarhus.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {organizers.map((org, index) => (
            <div key={org.name} className={`bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col items-center ${index % 2 === 0 ? '-rotate-1' : 'rotate-1'}`}>
              <Avatar className="w-28 h-28 md:w-32 md:h-32 mb-4 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <AvatarImage src={org.image} alt={org.name} />
                <AvatarFallback className="bg-go-yellow text-black text-2xl font-black">
                  {org.name.split(" ").map(n => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-black uppercase">{org.name}</h3>
              <div className="flex flex-col items-center gap-1 mb-4">
                <p className="text-go-fuchsia font-bold text-sm bg-gray-100 border-2 border-black px-2">{org.role}</p>
                <p className="text-black font-black text-sm bg-go-yellow border-2 border-black px-2">@ {org.company}</p>
              </div>
              <div className="flex gap-3">
                <a href={org.linkedin} target="_blank" rel="noreferrer" className="bg-white p-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:bg-[#0A66C2] hover:text-white transition-all text-black">
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a href={org.github} target="_blank" rel="noreferrer" className="bg-white p-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:bg-black hover:text-white transition-all text-black">
                  <FaGithub className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
