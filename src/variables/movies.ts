import {
  appleTV,
  iphone,
  ipad,
  mac,
  appleVision,
  airPlay,
  samsung,
  lg,
  vizio,
  sony,
  xfinity,
  roku,
  firetv,
  googletv,
  playstation,
  xbox,
  airplane,
  familyMan,
  laboratory,
  napoleon,
  personDarkness,
  scaryBuilding,
  stars,
  avatar,
  movie,
  squidGame,
  warPlanes,
} from "../assets/images";

export type Movie = {
  poster: string;
  name: string;
};

export const movies = [
  { poster: airplane, name: "Airplane" },
  {
    poster: familyMan,
    name: "Family man",
  },
  {
    poster: laboratory,
    name: "Laboratory",
  },
  { poster: napoleon, name: "Napoleon" },
  {
    poster: personDarkness,
    name: "Person in Darkness",
  },
  {
    poster: scaryBuilding,
    name: "Scary Building",
  },
  { poster: stars, name: "Stars" },
  { poster: avatar, name: "Avatar" },
  { poster: movie, name: "Movie" },
  { poster: squidGame, name: "Squid game" },
  { poster: warPlanes, name: "Planes on war" },
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

export const logos = [
  { id: 1, img: appleTV, text: "Apple TV" },
  { id: 2, img: iphone, text: "IPhone" },
  { id: 3, img: ipad, text: "IPad" },
  { id: 4, img: mac, text: "Mac" },
  { id: 5, img: appleVision, text: "Apple Vision Pro" },
  { id: 6, img: airPlay, text: "AirPlay" },
];

export const brands = [
  { id: 1, name: samsung },
  { id: 2, name: lg },
  { id: 3, name: vizio },
  { id: 4, name: sony },
  { id: 5, name: xfinity },
  { id: 6, name: roku },
  { id: 7, name: firetv },
  { id: 8, name: googletv },
  { id: 9, name: playstation },
  { id: 10, name: xbox },
];

export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];
