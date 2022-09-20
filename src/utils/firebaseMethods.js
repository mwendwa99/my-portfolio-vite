import {
  doc,
  getDocs,
  getFirestore,
  collection,
  getDoc,
  onSnapshot,
} from "firebase/firestore";
import { app } from "./firebase-config.js";

const db = getFirestore(app);
export const content = await getDocs(collection(db, "content"));
export const about = await getDoc(doc(db, "content", "about"));
export const whatido = await getDoc(doc(db, "content", "whatido"));
export const projects = await getDocs(collection(db, "projects"));
