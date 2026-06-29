import { Button } from "../ui/button";
import { MessageSquarePlus } from "lucide-react";

export function CallForTalks() {
  return (
    <section id="cfp" className="py-20 md:py-28 px-4 relative bg-go-fuchsia text-white" style={{ clipPath: "polygon(0 0, 100% 4vw, 100% 100%, 0 calc(100% - 4vw))", marginTop: "-4vw", paddingBottom: "10vw" }}>
      <div className="container mx-auto max-w-4xl relative z-10 text-center py-8">
        <div className="inline-flex items-center justify-center p-4 bg-white border-2 border-black text-black mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-3 hover:rotate-0 transition-transform">
          <MessageSquarePlus className="w-10 h-10 md:w-12 md:h-12" />
        </div>
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 uppercase drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] text-white">
          Become a <span className="text-go-yellow">Speaker!</span>
        </h2>
        <div className="bg-white text-black border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-10 rotate-1">
          <p className="text-lg md:text-xl font-bold leading-snug">
            Got something cool to share? We love lightning talks (5 mins) and deep dives (45 mins). First-time speakers are our absolute favorite!
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
          <Button size="lg" className="w-full sm:w-auto bg-go-yellow text-black hover:bg-go-yellow/90 font-black uppercase text-lg h-14 px-8 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all" asChild>
            <a href="https://www.linkedin.com/company/go-aarhus" target="_blank" rel="noreferrer">
              Message on LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
