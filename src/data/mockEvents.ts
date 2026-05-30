import type { Event } from "../types/Event";

export const mockEvents: Event[] = [
  {
    id: "1",
    title: "Friday Board Game Night",
    description: "Join us for games and fellowship.",
    date: "2026-06-05",
    location: "Mission Labs",
    category: "Social",
    attendeeCount: 12,
    isUserAttending: false
  },
  {
    id: "2",
    title: "Saturday Hack & Breakfast",
    description: "Bring your laptop and build together.",
    date: "2026-06-06",
    location: "Mission Labs",
    category: "Tech",
    attendeeCount: 8,
    isUserAttending: true
  }
];