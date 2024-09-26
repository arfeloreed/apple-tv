export type Movie = {
  poster: string;
  name: string;
};

export const movies = [
  { poster: "/src/assets/images/airplane.webp", name: "Airplane" },
  {
    poster: "/src/assets/images/family-man.webp",
    name: "Family man",
  },
  {
    poster: "/src/assets/images/laboratory.webp",
    name: "Laboratory",
  },
  { poster: "/src/assets/images/napoleon.webp", name: "Napoleon" },
  {
    poster: "/src/assets/images/person-in-darkness.webp",
    name: "Person in Darkness",
  },
  {
    poster: "/src/assets/images/scary-building.webp",
    name: "Scary Building",
  },
  { poster: "/src/assets/images/stars.webp", name: "Stars" },
];

export const randomMoviesSet1 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5));

export const randomMoviesSet2 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5))
  .sort(() => Math.random() - 0.5);

export const subcribeTexts = [
  {
    id: 1,
    top: "Buy an Apple device",
    heading: "3 months free",
    desc: "Apple TV+ is included for 3 months when you purchase an Apple device and redeem the offer within 90 days.",
    buttonText: "Check eligibility",
  },
  {
    id: 2,
    top: "Free 7-day trial",
    heading: "₱499.00/mo.",
    desc: "A monthly subscription is just ₱499.00 per month after a free 7-day trial. Share Apple TV+ with your family.",
    buttonText: "Try it free",
  },
  {
    id: 3,
    top: "Free 1-month trial",
    heading: "Apple One",
    desc: "Bundle Apple TV+ with up to five other great services for one low monthly price. And enjoy more for less.",
    buttonText: "Try Apple One free",
    linktext: "Learn more >",
  },
];
