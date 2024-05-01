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
