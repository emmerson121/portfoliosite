// src/data/reviews.ts

export interface ClientReview {
  name: string;
  company: string;
  rating: number; // 1–5 stars
  review: string;
  image?: string;
}

export const clientReviews: ClientReview[] = [
  {
    name: "Patrick Ogbu",
    company: "Marat Education",
    rating: 5,
    review:
      "Collaborating with you was very productive! The design met with our brand's expectations.",
    image: "/images/sarah.jpg",
  },
  {
    name: "David Stephen",
    company: "Infotech Services",
    rating: 4,
    review:
      "Quite an outstanding job! Your time-keeping and communication abilities are commendable.",
    image: "/images/david.jpg",
  },
  {
    name: "Georginia Benedict",
    company: "UrbanWorks Design",
    rating: 5,
    review:
      "Your creativity in turning innovative ideas to real-time projects needs to be studied. You're good at your job, bravo!",
    image: "/images/maria.jpg",
  },
];
