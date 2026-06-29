// No lucide-react icons needed here anymore
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "../ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-go-yellow border-b-2 border-black">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex gap-1.5 items-center bg-white border-2 border-black px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] -rotate-1 hover:rotate-0 transition-transform">
          <span className="font-black text-xl tracking-tighter text-go-blue">GO</span>
          <span className="font-black text-xl tracking-tighter">AARHUS</span>
        </div>

        <nav className="hidden md:flex gap-6 items-center font-bold text-sm uppercase tracking-wide">
          <a href="#events" className="hover:text-go-fuchsia hover:underline decoration-2 underline-offset-4 transition-colors">Events</a>
          <a href="#cfp" className="hover:text-go-fuchsia hover:underline decoration-2 underline-offset-4 transition-colors">Speak</a>
          <a href="#companies" className="hover:text-go-fuchsia hover:underline decoration-2 underline-offset-4 transition-colors">Companies</a>
          <a href="#organizers" className="hover:text-go-fuchsia hover:underline decoration-2 underline-offset-4 transition-colors">Team</a>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2">
            <a href="https://www.meetup.com/go-aarhus/" target="_blank" rel="noreferrer" className="bg-white p-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-100 transition-all text-black">
              <img src="/meetup.png" alt="Meetup" className="h-4 w-4 object-contain" />
            </a>
            <a href="https://www.linkedin.com/company/go-aarhus" target="_blank" rel="noreferrer" className="bg-white p-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#0A66C2] hover:text-white transition-all text-black">
              <FaLinkedin className="h-4 w-4" />
            </a>
            <a href="https://github.com/go-aarhus" target="_blank" rel="noreferrer" className="bg-white p-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white transition-all text-black">
              <FaGithub className="h-4 w-4" />
            </a>
          </div>
          <Button asChild className="h-10 px-4 bg-go-blue hover:bg-go-blue/90 text-white font-black uppercase text-sm border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
            <a href="https://www.meetup.com/go-aarhus/" target="_blank" rel="noreferrer">
              Join Meetup
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
