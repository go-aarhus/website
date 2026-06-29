import { Calendar, MapPin, Clock } from "lucide-react";
import { Button } from "../ui/button";
import { upcomingEvent, pastEvents } from "../../data/events";

export function Events() {
  const isTBA = upcomingEvent.date === "TBA";

  return (
    <section id="events" className="pt-16 pb-24 md:pb-32 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          {!isTBA && (
            <div className="inline-block bg-go-fuchsia border-2 border-black text-white font-black px-4 py-1.5 mb-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 hover:rotate-1 transition-transform cursor-default text-sm tracking-wide">
              IT'S HAPPENING!
            </div>
          )}
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase drop-shadow-md">Meetups & Events</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upcoming Event */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-black mb-4 flex items-center gap-2 uppercase text-black drop-shadow-sm">
              <span className="relative flex h-4 w-4 border-2 border-black bg-go-fuchsia">
                {!isTBA && <span className="animate-ping absolute inline-flex h-full w-full bg-go-fuchsia opacity-75"></span>}
              </span>
              Next Meetup
            </h3>
            
            <div className={`group relative bg-white border-2 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,173,216,1)] hover:-translate-y-0.5 transition-all duration-200 ${isTBA ? 'opacity-90' : ''}`}>
              <div className="flex flex-wrap gap-2 mb-4">
                {upcomingEvent.tags.map(tag => (
                  <span key={tag} className="bg-go-yellow text-black font-black text-xs uppercase px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    {tag}
                  </span>
                ))}
              </div>
              <h4 className={`text-2xl md:text-3xl font-black mb-4 leading-tight ${isTBA ? 'text-muted-foreground' : ''}`}>{upcomingEvent.title}</h4>
              
              <div className="flex flex-col sm:flex-row gap-3 mb-6 text-black font-bold text-sm md:text-base">
                <span className="flex items-center gap-2 bg-go-blue/20 px-3 py-1.5 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"><Calendar className="w-4 h-4 text-black" /> {upcomingEvent.date}</span>
                <span className="flex items-center gap-2 bg-go-fuchsia/20 px-3 py-1.5 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"><Clock className="w-4 h-4 text-black" /> {upcomingEvent.time}</span>
              </div>
              <div className="flex items-center gap-2 mb-6 font-black text-lg border-l-4 border-go-yellow pl-3">
                <MapPin className="w-6 h-6 text-black" /> {upcomingEvent.location}
              </div>
              
              <p className="text-base md:text-lg mb-8 font-medium border-2 border-black p-4 bg-gray-50">{upcomingEvent.description}</p>
              
              <Button size="lg" className="w-full sm:w-auto h-12 px-8 bg-go-fuchsia hover:bg-go-fuchsia text-white font-black uppercase tracking-wider border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all" asChild>
                <a href={upcomingEvent.rsvpLink || "https://www.meetup.com/go-aarhus/"} target="_blank" rel="noreferrer">{isTBA ? "Join Meetup for Updates" : "RSVP Now!"}</a>
              </Button>
            </div>
          </div>

          {/* Past Events */}
          <div>
            <h3 className="text-2xl font-black mb-4 uppercase text-black drop-shadow-sm">Past Events</h3>
            <div className="space-y-4">
              {pastEvents.map((event, index) => (
                <div key={event.id} className={`bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all cursor-default ${index % 2 === 0 ? 'rotate-1 hover:rotate-0' : '-rotate-1 hover:rotate-0'}`}>
                  <h4 className="text-lg md:text-xl font-black mb-2 leading-tight">{event.title}</h4>
                  <div className="flex items-center gap-2 text-sm font-bold text-black bg-go-yellow inline-flex px-2 py-1 border-2 border-black">
                    <Calendar className="w-4 h-4" /> {event.date}
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-6 h-12 border-2 border-black bg-white text-black font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all text-sm md:text-base" asChild>
              <a href="https://www.meetup.com/go-aarhus/events/past/" target="_blank" rel="noreferrer">See all past events</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
