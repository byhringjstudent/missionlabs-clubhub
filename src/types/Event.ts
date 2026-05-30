export interface Event {
    id: string;
    title: string;
    description: string;
    data: string;
    location: string;
    category: string;
    attendeeCount: number;
    isUserAttending: boolean;
}
