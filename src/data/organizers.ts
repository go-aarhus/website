export interface Organizer {
  name: string;
  role: string;
  company: string;
  image: string;
  linkedin: string;
  github: string;
}

// -----------------------------------------------------------------------------
// ORGANIZERS
// -----------------------------------------------------------------------------
// This list is automatically rendered in the "Meet the Team" section.
// To add or remove organizers, simply modify this typed array.
// Place their profile image in the public/ folder.

export const organizers: Organizer[] = [
  {
    name: "Asger Noer",
    role: "Organizer",
    company: "Lunar",
    image: "/asger.jpg",
    linkedin: "https://www.linkedin.com/in/asger-noer",
    github: "https://github.com/asger-noer"
  },
  {
    name: "Benjamin Nørgaard",
    role: "Organizer",
    company: "Lunar",
    image: "/benjamin.jpg",
    linkedin: "https://www.linkedin.com/in/blacksails/",
    github: "https://github.com/blacksails"
  },
  {
    name: "David Carlos Zachariae",
    role: "Organizer",
    company: "Lunar",
    image: "/david.jpg",
    linkedin: "https://www.linkedin.com/in/david-carlos-zachariae",
    github: "https://github.com/arumie"
  },
  {
    name: "Jonas Tranberg",
    role: "Organizer",
    company: "UNIwise",
    image: "/jonas.jpg",
    linkedin: "https://www.linkedin.com/in/jonas-tranberg",
    github: "https://github.com/naueramant"
  }
];
