export const STAR_WARS = "https://swapi.py4e.com/api/";
export const VISUAL_GUIDE_URL = "https://starwars-visualguide.com/assets/img/";

export const RESOURCES_FILMS = {
  CHARACTERS: "characters",
  FILMS: "films",
  SPECIES: "species",
  STAR_SHIPS: "starships",
  VEHICLES: "vehicles",
  PLANETS: "planets",
};

export const RESOURCES_STAR_WARS = [
  "root",
  "people",
  "films",
  "starships",
  "vehicles",
  "species",
  "planets",
];

export const RESOURCES_VISULA_GUIDE = [
  "characters",
  "films",
  "species",
  "starships",
  "vehicles",
  "planets",
];
export const newUser = {
  email: "",
  displayName: "",
  uid: "",
  isLogin: false,
};

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

export const trailers = [
  {
    title: "A New Hope",
    url: "https://www.youtube.com/embed/vZ734NWnAHA?si=62j0qitJ1pCPzVKj",
  },
  {
    title: "The Empire Strikes Back",
    url: "https://www.youtube.com/embed/urhsYepFqs0?si=IK8fgJC8OdtYj62N",
  },
  {
    title: "Return of the Jedi",
    url: "https://www.youtube.com/embed/EcQKTTwLA-Y?si=aFNaWgMqnwbM8J6B",
  },
  {
    title: "The Force Awakens",
    url: "https://www.youtube.com/embed/sGbxmsDFVnE?si=2qqMgazH8jeG62R-",
  },
  {
    title: "Revenge of the Sith",
    url: "https://www.youtube.com/embed/5UnjrG_N8hU?si=kqs-EkxS5r0_UsYn",
  },
  {
    title: "The Phantom Menace",
    url: "https://www.youtube.com/embed/bD7bpG-zDJQ?si=dfdNf7AR98vOnJ_Q",
  },
  {
    title: "Attack of the Clones",
    url: "https://www.youtube.com/embed/gYbW1F_c9eM?si=1kHt2MACrsyDP75O",
  },
];
