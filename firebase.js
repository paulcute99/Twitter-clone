import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBWsQspIGd2J1CoYdlwZdcZCfWfkqCya4E",
    authDomain: "twitter-clone-632db.firebaseapp.com",
    projectId: "twitter-clone-632db",
    storageBucket: "twitter-clone-632db.appspot.com",
    messagingSenderId: "271923858240",
    appId: "1:271923858240:web:fcf0da31b324e7ebb388a5"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };