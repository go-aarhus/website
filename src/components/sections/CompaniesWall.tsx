import { companies } from "../../data/companies";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa";

export function CompaniesWall() {
  return (
    <section id="companies" className="py-20 md:py-28 px-4 relative bg-go-yellow text-black" style={{ clipPath: "polygon(0 0, 100% 4vw, 100% 100%, 0 calc(100% - 4vw))", marginTop: "-4vw", paddingBottom: "10vw" }}>
      <div className="container mx-auto max-w-5xl text-center relative z-10 py-8">
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-10 uppercase drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] bg-white inline-block border-2 border-black px-4 py-2 -rotate-1">
          Companies <span className="text-go-blue">Using Go</span>
        </h2>
        
        {/* Grid Wall */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8 mb-16 justify-center max-w-4xl mx-auto">
          {companies.map((company) => (
            <a href={company.website} target="_blank" rel="noreferrer" key={company.name} className="flex flex-col items-center justify-center p-6 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all group">
              <img 
                src={company.logoUrl} 
                alt={`${company.name} logo`} 
                className="w-24 h-24 md:w-32 md:h-32 object-contain mb-4 group-hover:scale-105 transition-transform"
                onError={(e) => {
                  // Fallback if logo fails to load
                  (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${company.name}&background=random&color=fff&bold=true&size=128`;
                }}
              />
              <span className="text-lg md:text-xl font-black">{company.name}</span>
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-white border-2 border-black p-6 md:p-8 max-w-2xl mx-auto shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-1">
          <p className="text-xl md:text-2xl font-black mb-6">
            Is your company missing?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto h-12 px-6 bg-go-blue hover:bg-go-blue/90 text-white font-black uppercase tracking-wide border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all" asChild>
              <a href="https://www.linkedin.com/company/go-aarhus" target="_blank" rel="noreferrer">
                Reach out to us on linkedin
              </a>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 px-6 bg-white hover:bg-gray-100 text-black font-black uppercase tracking-wide border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all" asChild>
              <a href="https://github.com/go-aarhus/website" target="_blank" rel="noreferrer">
                <FaGithub className="mr-2 h-5 w-5" />
                Create a PR
              </a>
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
