export interface UpcomingEvent {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  tags: string[];
  rsvpLink?: string;
}

export interface PastEvent {
  id: number;
  title: string;
  date: string;
  link: string;
}

// -----------------------------------------------------------------------------
// CURRENT UPCOMING EVENT
// -----------------------------------------------------------------------------
// To change this from TBA to a real event, simply update the fields below.
// If the date is "TBA", the website will automatically hide the "IT'S HAPPENING"
// sticker and update the button to "Join Meetup for Updates".

export const upcomingEvent: UpcomingEvent = {
  title: "Next Meetup: To Be Announced",
  date: "TBA",
  time: "TBA",
  location: "TBA (Aarhus somewhere)",
  description: "We are currently brewing up our next exciting event! Join our Meetup group to get notified as soon as the date, location, and speakers are announced.",
  tags: ["TBA", "Planning Phase"],
  rsvpLink: "https://www.meetup.com/go-aarhus/"
};

// -----------------------------------------------------------------------------
// PAST EVENTS
// -----------------------------------------------------------------------------
// Add new past events to the TOP of this list.

export const pastEvents: PastEvent[] = [
  { id: 1, title: "Go AAR: Level up your testing", date: "Jun 25, 2020", link: "https://www.meetup.com/go-aarhus/events/313308194/?eventOrigin=group_events_list" },
  { id: 2, title: "Virtual: Generics Draft Proposal Review", date: "Sep 30, 2020", link: "https://www.meetup.com/go-aarhus/events/273479275/?eventOrigin=group_events_list" },
  { id: 3, title: "Bringing existing tools into GitOps and TEDI...", date: "Feb 26, 2020", link: "https://www.meetup.com/go-aarhus/events/267903832/?eventOrigin=group_events_list" },
  { id: 4, title: "GraphQL in Go and How Uber 'Go'es", date: "Nov 27, 2019", link: "https://www.meetup.com/go-aarhus/events/266317227/?eventOrigin=group_events_list" }
];
