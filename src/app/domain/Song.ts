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
  background?: string;
  rating?: string;
}
interface Person {
  name?: string;
}

enum Status {}
// Define possible status values
export const songs: SONG[] = [
  {
    ID: '1',
    name: 'Imaan Tu',
    link: 'https://youtu.be/s5dHonH6E98?si=JZrZHlfAJsrgROy3',
    images: ['/assets/images/Iman_tu.jpg', 'image2'],
    lyrics: 'Surveen Kaur',
    releaceDate: 'xx',
    duration: 4.42,
    directors: [{ name: 'Akshay K Agarwal' }],
    composers: [
      { name: 'Aditi Budhathoki' },
      { name: 'Paras Bhushan Kalnawat' },
    ],
    singers: [{ name: 'Ankit Tiwari' }],
    background: '/assets/images/bgofsong.jpg',
  },
];
