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
