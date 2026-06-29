import { Button } from "../ui/button";
import { ArrowRight, Terminal } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full py-12 md:py-20 px-4 bg-background overflow-hidden flex flex-col items-center justify-center">
      {/* Neo-brutalist decorative shapes - toned down */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-go-blue border-2 border-black rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] animate-bounce hidden md:block" style={{ animationDuration: '3s' }} />
      <div className="absolute bottom-10 right-10 w-12 h-12 bg-go-fuchsia border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-12 hidden md:block" />

      <div className="container mx-auto text-center z-10 max-w-3xl">
        <div className="inline-block bg-go-yellow border-2 border-black text-black font-black px-4 py-1.5 mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] -rotate-2 hover:rotate-0 transition-transform cursor-default text-sm md:text-base uppercase tracking-wide">
          The Official Local Go Community
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 uppercase text-foreground leading-[1.1]">
          <span className="text-go-blue inline-block hover:-translate-y-1 transition-transform">GO</span>{" "}
          <span className="inline-block hover:-translate-y-1 transition-transform delay-75">AARHUS</span>
        </h1>
        
        <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto font-bold mb-10 border-2 border-black p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          Connecting the Gopher community in Denmark's tech capital! Whether you're a seasoned wizard or a brand-new curious gopher, <span className="text-go-blue">this is the place for you.</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
          <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base bg-go-fuchsia hover:bg-go-fuchsia/90 text-white font-black uppercase tracking-wide border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all group" asChild>
            <a href="#events">
              See Upcoming Events
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base bg-white hover:bg-gray-100 text-black font-black uppercase tracking-wide border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all" asChild>
            <a href="#cfp">
              <Terminal className="mr-2 h-5 w-5" />
              Submit a Talk
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
