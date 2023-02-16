const movies = [
  {
    id: "1",
    title: "Oceans 8",
    category: "Comedy",
    likes: 4,
    dislikes: 1,
    cover: "https://i.postimg.cc/qRQCVf9P/ocean-s8.jpg",
  },
  {
    id: "2",
    title: "Midnight Sun",
    category: "Comedy",
    likes: 2,
    dislikes: 0,
    cover:
      "https://i.postimg.cc/c4rvv01F/midnight-sun.jpg",
  },
  {
    id: "3",
    title: "Les indestructibles 2",
    category: "Animation",
    likes: 3,
    dislikes: 1,
    cover: "https://i.postimg.cc/6qchjw47/images.jpg",
  },
  {
    id: "4",
    title: "Sans un bruit",
    category: "Thriller",
    likes: 6,
    dislikes: 6,
    cover: "https://i.postimg.cc/rph0Pmf2/images-1.jpg",
  },
  {
    id: "5",
    title: "Creed II",
    category: "Drame",
    likes: 16,
    dislikes: 2,
    cover: "https://i.postimg.cc/D0Nck65F/images-2.jpg",
  },
  {
    id: "6",
    title: "Pulp Fiction",
    category: "Thriller",
    likes: 11,
    dislikes: 3,
    cover: "https://i.postimg.cc/htYhLwvK/images-3.jpg",
  },
  {
    id: "7",
    title: "Pulp Fiction",
    category: "Thriller",
    likes: 12333,
    dislikes: 32,
    cover: "https://i.postimg.cc/htYhLwvK/images-3.jpg",
  },
  {
    id: "8",
    title: "Seven",
    category: "Thriller",
    likes: 2,
    dislikes: 1,
    cover:"https://i.postimg.cc/kgyGZ4TX/dvd-seven.webp",
  },
  {
    id: "9",
    title: "Inception",
    category: "Thriller",
    likes: 2,
    dislikes: 1,
    cover: "https://i.postimg.cc/htYhLwvK/images-3.jpg",
  },
  {
    id: "10",
    title: "Gone Girl",
    category: "Thriller",
    likes: 22,
    dislikes: 12,
    cover: "https://i.postimg.cc/tRrbn6Yj/images-5.jpg",
  },
];

export const movies$ = new Promise((resolve, reject) =>
  setTimeout(resolve, 100, movies)
);
