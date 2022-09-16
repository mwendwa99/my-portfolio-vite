import { doc, getDoc, getFirestore } from "firebase/firestore";
import { app } from "./firebase-config.js";

const db = getFirestore(app);
const docRef = doc(db, "content", "title");
export const userDocument = await getDoc(docRef);

if (userDocument.exists()) {
  console.log(`document exists, ${userDocument.data()}`);
} else {
  console.log(`better luck next time`);
}
