import { app } from "./firebaseconfig.js";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const db = getFirestore(app);

class Project {
  constructor() {
    this.data = [];
    this.all = getDocs(collection(db, "projects"));
    // colleciton
    this.document = collection("projects");
  }

  async getProject(id) {
    const doc = await getDoc(this.document.collection("projects").doc(id));
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

let Projects = new Project();

export { Projects };
