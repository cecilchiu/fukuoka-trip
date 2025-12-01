export enum ActivityType {
  TRANSPORT = 'TRANSPORT',
  SIGHTSEEING = 'SIGHTSEEING',
  FOOD = 'FOOD',
  SHOPPING = 'SHOPPING',
  STAY = 'STAY',
  OTHER = 'OTHER'
}

export interface ItineraryItem {
  id: string;
  time: string;
  title: string;
  description?: string;
  type: ActivityType;
  location?: string;
}

export interface DayItinerary {
  id: string;
  date: string; // MM/DD Format
  dayLabel: string; // D1, D2, etc.
  title: string;
  items: ItineraryItem[];
}

export interface Accommodation {
  name: string;
  checkIn: string;
  checkOut: string;
  address?: string;
  notes?: string;
}

export interface DiningInfo {
  name: string;
  type: string;
  status: 'Booked' | 'Planned' | 'TBD';
  notes?: string;
  location?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface ChecklistItem {
  id: string;
  text: string;
  note?: string;
}

export interface ChecklistCategory {
  id: string;
  title: string;
  items: ChecklistItem[];
}