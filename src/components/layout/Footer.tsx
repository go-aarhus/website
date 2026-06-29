export function Footer() {
  return (
    <footer className="border-t-2 border-black py-8 bg-white relative z-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4 text-center md:text-left font-bold relative">
        <div className="flex gap-1.5 items-center bg-white border-2 border-black px-2 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          <span className="font-black text-lg tracking-tighter text-go-blue">GO</span>
          <span className="font-black text-lg tracking-tighter">AARHUS</span>
        </div>
        <p className="text-sm md:text-base text-black bg-go-yellow px-3 py-1.5 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:absolute md:left-1/2 md:top-1/2 md:-translate-y-1/2 md:-translate-x-1/2">
          Built with <span className="text-go-fuchsia text-lg">♥</span> for the Aarhus Golang community.
        </p>
        <div className="flex gap-4 text-sm font-black uppercase">
          <a href="https://www.linkedin.com/company/go-aarhus" className="hover:text-go-blue transition-colors underline decoration-2 underline-offset-4">LinkedIn</a>
          <a href="https://www.meetup.com/go-aarhus/" className="hover:text-go-blue transition-colors underline decoration-2 underline-offset-4">Meetup</a>
          <a href="https://github.com/go-aarhus" className="hover:text-go-blue transition-colors underline decoration-2 underline-offset-4">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
