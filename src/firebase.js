import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config";
import { getAuth } from "firebase/auth";

// export const firebaseConfig = {
//   apiKey: "AIzaSyC91cw2MlmV85ACdFmvsZvjQvewFgKo-kM",
//   authDomain: "star-wars-2fdd6.firebaseapp.com",
//   projectId: "star-wars-2fdd6",
//   storageBucket: "star-wars-2fdd6.appspot.com",
//   messagingSenderId: "858211205906",
//   appId: "1:858211205906:web:c9c6f9668abcb18275a9cb",
// };
const appFirebase = initializeApp(firebaseConfig);
const appAuth = getAuth(appFirebase);

export { appFirebase, appAuth };
