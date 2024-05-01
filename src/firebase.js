import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config";
import { getAuth } from "firebase/auth";

const appFirebase = initializeApp(firebaseConfig);
const appAuth = getAuth(appFirebase);

export { appFirebase, appAuth };
