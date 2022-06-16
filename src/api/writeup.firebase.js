import { app } from "./firebaseconfig.js";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const db = getFirestore(app);

class Writeup {
  constructor() {
    this.data = [];
    this.all = getDocs(collection(db, "writeups"));
    // colleciton
    this.document = collection("writeups");
  }

  async getProject(id) {
    const doc = await getDoc(this.document.collection("writeups").doc(id));
    return doc;
  }

  async addProject(project) {
    const doc = await this.document.add(project);
    return doc;
  }

  async updateProject(id, project) {
    const doc = await this.document.doc(id).update(project);
    return doc;
  }

  async deleteProject(id) {
    const doc = await this.document.doc(id).delete();
    return doc;
  }
}

let Writeups = new Writeup();

export { Writeups };
