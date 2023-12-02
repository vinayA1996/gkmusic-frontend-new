export interface SONG {
  ID: string;
  name?: string;
  images?: string[];
  lyrics?: string;
  releaceDate?: string;
  link?: string;
  duration: number;
  status?: Status;
  writers?: Person[];
  directors?: Person[];
  composers?: Person[];
  actors?: Person[];
  singers?: Person[];
}
interface Person {
  // Define properties for the Person type
}

enum Status {}
// Define possible status values
export const songs: SONG[] = [
  {
    ID: '1',
    name: 'Imaan Tu',
    images: ['image1', 'image2'],
    lyrics: 'Surveen Kaur',
    releaceDate: 'xx',
    duration: 4.42,
    directors: [{ name: 'Akshay K Agarwal' }],
    composers: [{ name: 'Amir Khan' }],
    singers: [{ name: 'Ankit Tiwari' }],
  },
];
